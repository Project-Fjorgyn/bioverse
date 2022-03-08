import React from 'react';
import { List } from 'react-native-paper';

import { theme } from '../theme';

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
