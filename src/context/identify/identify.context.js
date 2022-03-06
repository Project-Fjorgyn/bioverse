import React, { createContext, useState } from 'react';

import { buildQuestion, BuildOptions } from './builder.functions';
import { filterOptions } from './filter.functions';
import { LoadSchema, LoadTaxa } from '../../services/vocab/vocab.service';

function get(obj, key, fallback) {
  if (key in obj) {
    return obj[key];
  }
  return fallback;
}

function SelectQuestion(schema, to_skip, answers, taxa, accumulatedKeyset = null) {
  /*
    schema: current schema level for taxa in question
    taxa: full list of taxa under consideration
    accumulatedKeyset: ordered array of keys required to index
      index into the taxa to reach the current schema level
  */
  if (!accumulatedKeyset) {
    accumulatedKeyset = [];
  }

  var selectedQuestion = {
    expectation: 0,
    choice: null,
    schema: null,
    keyset: null,
  };
  var options = null;

  for (let key in schema) {
    var question_id = [...accumulatedKeyset, key].join('.');
    if (to_skip.some((id) => id === question_id)) {
      continue;
    }
    var question = { expectation: 0 };
    var question_keyset = null;
    var kind = schema[key]['kind'];
    if (kind === 'set' || kind === 'categorical' || kind === 'range') {
      question_keyset = [...accumulatedKeyset, key];
      options = BuildOptions(question_keyset, schema[key], taxa);
      question = buildQuestion[kind](
        schema[key]['values'],
        options,
        get(answers, question_keyset.join('.'), [])
      );
      question['questionSchema'] = schema[key];
      question['keyset'] = question_keyset;
    } else if (schema[key]['kind'] === 'object') {
      var newAccumulatedKeyset = [...accumulatedKeyset, key];
      var result = SelectQuestion(
        schema[key]['members'],
        to_skip,
        answers,
        taxa,
        newAccumulatedKeyset
      );
      question = result;
    }

    if (question.expectation > selectedQuestion.expectation) {
      selectedQuestion = question;
    }
  }
  return selectedQuestion;
}

function FilterTaxa(selectedQuestion, answer, taxa) {
  var schema = selectedQuestion['questionSchema'];
  var keyset = selectedQuestion['keyset'];
  var choice = selectedQuestion['choice'];
  var options = BuildOptions(keyset, schema, taxa);
  var kept = filterOptions[schema['kind']](answer, choice, options);
  var kept_taxa = [];
  for (let i in kept) {
    kept_taxa.push(taxa[kept[i]]);
  }
  return kept_taxa;
}

export const IdentifyContext = createContext();

export function IdentifyContextProvider({ children }) {
  const [topLevel, setTopLevel] = useState('trees');
  const [path, setPath] = useState([topLevel]);
  const [schema, setSchema] = useState(LoadSchema(path[path.length - 1]));
  const [selectedSpecies, setSelectedSpecies] = useState(LoadTaxa(path[path.length - 1]));
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [oldQuestions, setOldQuestions] = useState([]);
  const [findings, setFindings] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(
    SelectQuestion(schema, [], {}, selectedSpecies)
  );

  const updateTopLevel = (top, name) => {
    setTopLevel(top);
    setFindings([name]);
    setPath([top]);
    const new_schema = LoadSchema(top);
    setSchema(new_schema);
    var new_species = LoadTaxa(top);
    setSelectedSpecies(new_species);
    setAnsweredQuestions([]);
    setOldQuestions([]);
    var new_question = SelectQuestion(new_schema, [], {}, new_species);
    setActiveQuestion(new_question);
    followLinks(new_species, [], [], new_question, [name]);
  };

  const reset = () => {
    setFindings([topLevel]);
    setPath([topLevel]);
    var new_schema = LoadSchema([topLevel]);
    setSchema(new_schema);
    setSelectedSpecies(LoadTaxa([topLevel]));
    setAnsweredQuestions([]);
    setOldQuestions([]);
    var new_question = SelectQuestion(new_schema, [], {}, LoadTaxa([topLevel]));
    setActiveQuestion(new_question);
  };

  const buildAnswerSummary = (answered_questions) => {
    var summary = {};
    for (let i in answered_questions) {
      var question = answered_questions[i];
      if (question['answer'] !== 'unsure') {
        var key = question['keyset'].join('.');
        if (!(key in summary)) {
          summary[key] = [];
        }
        summary[key].push(question['choice']);
      }
    }
    return summary;
  };

  const followLinks = (species, oldQuestions, answeredQuestions, activeQuestion, findings) => {
    if (species.length == 1 && 'link' in species[0] && LoadSchema(species[0]['link'])) {
      var link = species[0]['link'];
      var newSchema = LoadSchema(link);
      var newSpecies = LoadTaxa(link);
      var newFindings = [...findings, species[0]['name']];
      setFindings(newFindings);
      setSchema(newSchema);
      setSelectedSpecies(newSpecies);
      setPath([...path, link]);
      if (activeQuestion.expectation > 0) {
        newOldQuestions = [...oldQuestions, ...answeredQuestions, activeQuestion];
      } else {
        newOldQuestions = [...oldQuestions, ...answeredQuestions];
      }
      setOldQuestions(newOldQuestions);
      setAnsweredQuestions([]);
      var new_question = SelectQuestion(newSchema, [], {}, newSpecies);
      setActiveQuestion(new_question);
      followLinks(newSpecies, newOldQuestions, [], new_question, newFindings);
    }
  };

  const answerQuestion = (answer) => {
    activeQuestion['answer'] = answer;
    var filteredSpecies = FilterTaxa(activeQuestion, answer, selectedSpecies);
    setSelectedSpecies(filteredSpecies);
    setAnsweredQuestions([...answeredQuestions, activeQuestion]);
    var questions_to_skip = [...answeredQuestions, activeQuestion].filter(
      (a) => a['answer'] === 'unsure'
    );
    var new_question = SelectQuestion(
      schema,
      questions_to_skip.map((a) => a.keyset.join('.')),
      buildAnswerSummary([...answeredQuestions, activeQuestion]),
      filteredSpecies
    );
    setActiveQuestion(new_question);
    followLinks(filteredSpecies, oldQuestions, answeredQuestions, activeQuestion, findings);
  };

  return (
    <IdentifyContext.Provider
      value={{
        activeQuestion,
        answeredQuestions,
        oldQuestions,
        selectedSpecies,
        reset,
        answerQuestion,
        findings,
        updateTopLevel,
      }}
    >
      {children}
    </IdentifyContext.Provider>
  );
}
