import React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import { theme } from '../theme';
import styled from 'styled-components/native';

export function Phenophase({ name, description, onPress }) {
  return (
    <List.Item
      title={name}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={description}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
      onPress={onPress}
    />
  );
}

export const SpeciesTitleContainer = styled(View)`
  flex-direction: row;
  position: relative;
  background-color: ${(props) => props.theme.colors.ui[4]};
  top: 0%;
  width: 100%;
  z-index: 100;
`;

export const SpeciesTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.ui[1]};
`;
