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

export function AnsweredQuestion({ prompt, answer }) {
  return (
    <List.Item
      title={prompt}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={answer}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
    />
  );
}

export function Question({ prompt, options, sendAnswer }) {
  var option_keys = [];
  for (let option in options) {
    option_keys.push(option);
  }

  return (
    <QuestionContainer>
      <QuestionPrompt>{prompt}</QuestionPrompt>
      <OptionsContainer>
        {option_keys.map((k) => (
          <ActionButton key={k} onPress={() => sendAnswer(k)}>
            {options[k]}
          </ActionButton>
        ))}
      </OptionsContainer>
    </QuestionContainer>
  );
}
