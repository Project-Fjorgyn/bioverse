import React from 'react';
import { List } from 'react-native-paper';

import { theme } from '../theme';

export function Phenophase({ name, common_name, onPress }) {
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
