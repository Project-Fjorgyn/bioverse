import React, { useContext } from 'react';
import { Text } from 'react-native';

import { SafeArea } from '../components/containers.components';
import { QuestionsContainer, AnsweredQuestion, Question } from '../components/questions.components';
import { IdentifyContext } from '../context/identify.context';
import { Species, SpeciesContainer } from '../components/species.components';
import { ResetContainer, ActionButton } from '../components/buttons.components';

export function IdentifyScreen() {
  const { answeredQuestions, selectedSpecies, reset, getNextQuestion, answerQuestion } =
    useContext(IdentifyContext);

  const { question, question_info } = getNextQuestion();

  const sendAnswer = (answer) => answerQuestion(question, question_info, answer);

  return (
    <SafeArea>
      <QuestionsContainer>
        {answeredQuestions.map(({ question, question_info }) => (
          <AnsweredQuestion
            key={question}
            prompt={question_info['prompt']}
            answer={question_info['options'][question_info['answer']]}
          />
        ))}
      </QuestionsContainer>
      {question ? (
        <Question
          prompt={question_info['prompt']}
          options={question_info['options']}
          sendAnswer={sendAnswer}
        />
      ) : (
        <SpeciesContainer>
          {selectedSpecies.map(({ name, common_names }) => (
            <Species name={name} common_name={common_names[0]} />
          ))}
        </SpeciesContainer>
      )}
      <ResetContainer>
        <ActionButton onPress={reset}>Reset</ActionButton>
      </ResetContainer>
    </SafeArea>
  );
}
