import React, { createContext, useState } from 'react';

import { PINUS_DATA, PINUS_QUESTIONS } from '../data/pinus';

export const IdentifyContext = createContext();

export function IdentifyContextProvider({ children }) {
  const [activeQuestions, setActiveQuestions] = useState(PINUS_QUESTIONS);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [selectedSpecies, setSelectedSpecies] = useState(PINUS_DATA);

  const reset = () => {
    setActiveQuestions(PINUS_QUESTIONS);
    setAnsweredQuestions({});
    setSelectedSpecies(PINUS_DATA);
  };

  const getNextQuestion = () => {};

  const answerQuestion = () => {};

  return (
    <IdentifyContext.Provider
      value={{
        answeredQuestions,
        selectedSpecies,
        reset,
        getNextQuestion,
        answerQuestion,
      }}
    >
      {children}
    </IdentifyContext.Provider>
  );
}
