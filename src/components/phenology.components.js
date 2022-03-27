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
