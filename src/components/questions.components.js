import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { List } from 'react-native-paper';

import { ActionButton } from './buttons.components';
import { theme } from '../theme';

const QuestionContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const QuestionPrompt = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[1]};
`;

const OptionsContainer = styled(View)`
  flex-direction: row;
`;

export const QuestionsContainer = styled(ScrollView)`
  flex: 1;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.ui[2]};
`;

export function QuestionViewSet({ questionSchema, choice, submitAnswer }) {
  return (
    <QuestionContainer>
      <QuestionPrompt>{`${questionSchema['prompt']} ${choice}?`}</QuestionPrompt>
      <OptionsContainer>
        <ActionButton onPress={() => submitAnswer('yes')}>yes</ActionButton>
        <ActionButton onPress={() => submitAnswer('no')}>no</ActionButton>
        <ActionButton onPress={() => submitAnswer('unsure')}>unsure</ActionButton>
      </OptionsContainer>
    </QuestionContainer>
  );
}

export function AnswerViewSet({ questionSchema, choice, answer }) {
  return (
    <List.Item
      title={`${questionSchema['prompt']} ${choice}`}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={answer}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
    />
  );
}

export function QuestionViewRange({ questionSchema, choice, submitAnswer }) {
  return (
    <QuestionContainer>
      <QuestionPrompt>
        {`${questionSchema['prompt']} ${choice}${questionSchema['unit']}?`}
      </QuestionPrompt>
      <OptionsContainer>
        <ActionButton onPress={() => submitAnswer('yes')}>yes</ActionButton>
        <ActionButton onPress={() => submitAnswer('no')}>no</ActionButton>
        <ActionButton onPress={() => submitAnswer('unsure')}>unsure</ActionButton>
      </OptionsContainer>
    </QuestionContainer>
  );
}

export function AnswerViewRange({ questionSchema, choice, answer }) {
  return (
    <List.Item
      title={`${questionSchema['prompt']} ${choice}`}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={answer}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
    />
  );
}

export function QuestionViewCategorical({ questionSchema, choice, submitAnswer }) {
  return (
    <QuestionContainer>
      <QuestionPrompt>{`${questionSchema['prompt']} ${choice}?`}</QuestionPrompt>
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

export function AnsweredQuestion({ questionSchema, choice, answer }) {
  var kind = questionSchema['kind'];
  if (kind === 'set') {
    return <AnswerViewSet questionSchema={questionSchema} choice={choice} answer={answer} />;
  } else if (kind === 'range') {
    return <AnswerViewRange questionSchema={questionSchema} choice={choice} answer={answer} />;
  } else if (kind === 'categorical') {
    return (
      <AnswerViewCategorical questionSchema={questionSchema} choice={choice} answer={answer} />
    );
  }
}

export function Question({ questionSchema, choice, submitAnswer }) {
  var kind = questionSchema['kind'];
  if (kind === 'set') {
    return (
      <QuestionViewSet
        questionSchema={questionSchema}
        choice={choice}
        submitAnswer={submitAnswer}
      />
    );
  } else if (kind === 'range') {
    return (
      <QuestionViewRange
        questionSchema={questionSchema}
        choice={choice}
        submitAnswer={submitAnswer}
      />
    );
  } else if (kind === 'categorical') {
    return (
      <QuestionViewCategorical
        questionSchema={questionSchema}
        choice={choice}
        submitAnswer={submitAnswer}
      />
    );
  }
}
