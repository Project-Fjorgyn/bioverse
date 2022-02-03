import React, { useContext } from 'react';
import { Text } from 'react-native';

import { SafeArea } from '../components/containers.components';
import { QuestionsContainer, AnsweredQuestion, Question } from '../components/questions.components';
import { IdentifyContext } from '../context/identify/identify.context';
import { Species, SpeciesContainer } from '../components/species.components';
import { ResetContainer, ActionButton } from '../components/buttons.components';

export function IdentifyScreen() {
  const { answeredQuestions, selectedSpecies, reset, answerQuestion, activeQuestion } =
    useContext(IdentifyContext);

  return (
    <SafeArea>
      <QuestionsContainer>
        {answeredQuestions.map((a) => (
          <AnsweredQuestion
            key={a.keyset.join('.')}
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
      <ResetContainer>
        <ActionButton onPress={reset}>Reset</ActionButton>
      </ResetContainer>
    </SafeArea>
  );
}
