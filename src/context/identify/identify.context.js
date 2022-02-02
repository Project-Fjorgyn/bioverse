import React, { createContext, useState } from 'react';

import { buildQuestion, BuildOptions } from './builder.functions';
import { filterOptions } from './filter.functions';
import { LoadSchema, LoadTaxa } from '../../services/vocab.service';

function SelectQuestion(schema, answered, taxa, accumulatedKeyset = null) {
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
    questionView: null,
    answerView: null,
  };
  var selectedQuestionKeyset = null;
  var selectedQuestionSchema = null;
  var options = null;

  for (let key in schema) {
    var question_id = [...accumulatedKeyset, key].join('.');
    if (answered.some((id) => id === question_id)) {
      continue;
    }
    var question = { expectation: 0 };
    var question_keyset = null;
    var question_schema = null;
    var kind = schema[key]['kind'];
    if (kind === 'set' || kind === 'categorical' || kind === 'range') {
      question_keyset = [...accumulatedKeyset, key];
      options = BuildOptions(question_keyset, schema[key], taxa);
      question = buildQuestion[kind](schema[key]);
      question_schema = schema[key];
    } else if (schema[key]['kind'] === 'object') {
      var newAccumulatedKeyset = [...accumulatedKeyset, key];
      var result = SelectQuestion(schema[key]['members'], answered, taxa, newAccumulatedKeyset);
      question = result.selectedQuestion;
      question_keyset = result.selectedQuestionKeyset;
      question_schema = result.selectedQuestionSchema;
    }
    if (question.expectation > selectedQuestion.expectation) {
      selectedQuestion = question;
      selectedQuestionKeyset = question_keyset;
      selectedQuestionSchema = question_schema;
    }
  }
  selectedQuestion[schema] = selectedQuestionSchema;
  selectedQuestion[keyset] = selectedQuestionKeyset;
  return selectedQuestion;
}

function FilterTaxa(selectedQuestion, answer, taxa) {
  var schema = selectedQuestion['schema'];
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

export function IdentifyContextProvider({ children }) {
  const [path, setPath] = useState(['pinopsida', 'pinales', 'pinaceae', 'pinus']);
  const [schema, setSchema] = useState(LoadSchema(path));
  const [selectedSpecies, setSelectedSpecies] = useState(LoadTaxa(path));
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(
    SelectQuestion(schema, answeredQuestions, selectedSpecies)
  );

  const reset = () => {
    setActiveQuestions(PINUS_QUESTIONS);
    setAnsweredQuestions([]);
    setSelectedSpecies(PINUS_DATA);
    setActiveQuestion(SelectQuestion(schema, answeredQuestions, selectedSpecies));
  };

  const answerQuestion = (answer) => {
    setSelectedSpecies(FilterTaxa(activeQuestion, answer, selectedSpecies));
    setAnsweredQuestions([...answeredQuestions, activeQuestion]);
    setActiveQuestion(SelectQuestion(schema, answeredQuestions, selectedSpecies));
  };

  return (
    <IdentifyContext.Provider
      value={{
        activeQuestion,
        answeredQuestions,
        selectedSpecies,
        reset,
        answerQuestion,
      }}
    >
      {children}
    </IdentifyContext.Provider>
  );
}
