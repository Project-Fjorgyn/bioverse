import React from 'react';
import { QuestionContainer, QuestionPrompt, OptionsContainer } from './questions.components';
import { ActionButton } from './buttons.components';

export function QuestionViewCategorical({ questionSchema, choice, submitAnswer }) {
  return (
    <QuestionContainer>
      <QuestionPrompt>
        `${questionSchema['prompt']} ${choice}`
      </QuestionPrompt>
      <OptionsContainer>
        <ActionButton onPress={() => submitAnswer('yes')}>yes</ActionButton>
        <ActionButton onPress={() => submitAnswer('no')}>no</ActionButton>
        <ActionButton onPress={() => submitAnswer('unsure')}>unsure</ActionButton>
      </OptionsContainer>
    </QuestionContainer>
  );
}

export function AnswerViewCategorical({ questionSchema, choice, answer }) {
  return (
    <List.Item
      title={`${questionSchema['prompt']} ${choice}`}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={answer}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
    />
  );
}
