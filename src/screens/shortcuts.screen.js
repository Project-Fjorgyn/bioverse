import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { SafeArea } from '../components/containers.components';
import { IdentifyContext } from '../context/identify/identify.context';
import { ShortcutsContext } from '../context/shortcuts.context';
import { theme } from '../theme';

export function ShortcutsScreen({ navigation }) {
  const { shortcuts, removeShortCut } = useContext(ShortcutsContext);
  const { updateTopLevel } = useContext(IdentifyContext);

  return (
    <SafeArea>
      <ScrollView>
        {shortcuts.map((t) => (
          <List.Item
            key={t.name}
            title={t.name}
            titleStyle={{ fontFamily: theme.fonts.heading }}
            description={t.common_name}
            descriptionStyle={{ fontFamily: theme.fonts.body }}
            onPress={() => {
              updateTopLevel(t.link, t.name);
              navigation.navigate('Identify');
            }}
          />
        ))}
      </ScrollView>
    </SafeArea>
  );
}
