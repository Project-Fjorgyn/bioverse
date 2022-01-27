import React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';

import { theme } from '../theme';

export function Species({ name, common_name }) {
  return (
    <List.Item
      title={name}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={common_name}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
    />
  );
}

export const SpeciesContainer = styled(ScrollView)`
  flex: 1;
  flex-grow: 0.25;
  background-color: ${(props) => props.theme.colors.ui[2]};
`;
