import React, { createContext, useState, useEffect } from 'react';

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
    schema: null,
    keyset: null,
  };
  var options = null;

  for (let key in schema) {
    var question_id = [...accumulatedKeyset, key].join('.');
    if (answered.some((id) => id === question_id)) {
      continue;
    }
    var question = { expectation: 0 };
    var question_keyset = null;
    var kind = schema[key]['kind'];
    if (kind === 'set' || kind === 'categorical' || kind === 'range') {
      question_keyset = [...accumulatedKeyset, key];
      options = BuildOptions(question_keyset, schema[key], taxa);
      question = buildQuestion[kind](schema[key]['values'], options);
      question['questionSchema'] = schema[key];
      question['keyset'] = question_keyset;
    } else if (schema[key]['kind'] === 'object') {
      var newAccumulatedKeyset = [...accumulatedKeyset, key];
      var result = SelectQuestion(schema[key]['members'], answered, taxa, newAccumulatedKeyset);
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
  const [path, setPath] = useState(['pinus']);
  const [schema, setSchema] = useState(LoadSchema(path));
  const [selectedSpecies, setSelectedSpecies] = useState(LoadTaxa(path));
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(
    SelectQuestion(
      schema,
      answeredQuestions.map((a) => a.keyset.join('.')),
      selectedSpecies
    )
  );

  const reset = () => {
    setSelectedSpecies(LoadTaxa(path));
    setAnsweredQuestions([]);
    var new_question = SelectQuestion(schema, [], LoadTaxa(path));
    setActiveQuestion(new_question);
  };

  const answerQuestion = (answer) => {
    activeQuestion['answer'] = answer;
    var filteredSpecies = FilterTaxa(activeQuestion, answer, selectedSpecies);
    setSelectedSpecies(filteredSpecies);
    setAnsweredQuestions([...answeredQuestions, activeQuestion]);
    var new_question = SelectQuestion(
      schema,
      [...answeredQuestions, activeQuestion].map((a) => a.keyset.join('.')),
      filteredSpecies
    );
    setActiveQuestion(new_question);
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
