import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';

import { theme } from '../theme';

export function Species({ name, common_name, onPress }) {
  return (
    <List.Item
      title={name}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={common_name}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
      onPress={onPress}
    />
  );
}

export const SpeciesContainer = styled(ScrollView)`
  flex: 1;
  flex-grow: 0.5;
  background-color: ${(props) => props.theme.colors.ui[3]};
`;

export const FindingsContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.ui[3]};
  flex-direction: row;
`;

export const FindingsTitle = styled(Text)`
  margin: 8px;
  font-family: ${(props) => props.theme.fonts.body};
`;
