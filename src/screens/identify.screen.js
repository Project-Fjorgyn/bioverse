import React, { useContext } from 'react';

import { SafeArea } from '../components/containers.components';
import { QuestionsContainer, AnsweredQuestion, Question } from '../components/questions.components';
import { IdentifyContext } from '../context/identify/identify.context';
import {
  Species,
  SpeciesContainer,
  FindingsContainer,
  FindingsTitle,
} from '../components/species.components';
import { ResetContainer, ActionButton } from '../components/buttons.components';

export function IdentifyScreen() {
  const {
    answeredQuestions,
    oldQuestions,
    selectedSpecies,
    reset,
    answerQuestion,
    activeQuestion,
    findings,
  } = useContext(IdentifyContext);

  return (
    <SafeArea>
      <QuestionsContainer>
        {oldQuestions.map((a) => (
          <AnsweredQuestion
            key={a.keyset.join('.') + a.answer + a.choice}
            questionSchema={a.questionSchema}
            choice={a.choice}
            answer={a.answer}
          />
        ))}
        {answeredQuestions.map((a) => (
          <AnsweredQuestion
            key={a.keyset.join('.') + a.answer + a.choice}
            questionSchema={a.questionSchema}
            choice={a.choice}
            answer={a.answer}
          />
        ))}
      </QuestionsContainer>
      {activeQuestion.expectation ? (
        <Question
          questionSchema={activeQuestion.questionSchema}
          choice={activeQuestion.choice}
          submitAnswer={answerQuestion}
        />
      ) : (
        <SpeciesContainer>
          {selectedSpecies.map(({ name, common_name }) => (
            <Species key={name} name={name} common_name={common_name} />
          ))}
        </SpeciesContainer>
      )}
      <FindingsContainer>
        {findings.map((f) => (
          <FindingsTitle key={f}>{f}</FindingsTitle>
        ))}
      </FindingsContainer>
      <ResetContainer>
        <ActionButton onPress={reset}>Reset</ActionButton>
      </ResetContainer>
    </SafeArea>
  );
}
