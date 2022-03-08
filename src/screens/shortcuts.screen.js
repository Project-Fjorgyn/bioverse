import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import { SafeArea } from '../components/containers.components';
import { IdentifyContext } from '../context/identify/identify.context';
import { ShortcutsContext } from '../context/shortcuts.context';
import { ShortcutWithMembers, ShortcutWithoutMembers } from '../components/shortcuts.components';

export function ShortcutsScreen({ navigation }) {
  const { shortcuts } = useContext(ShortcutsContext);
  const { updateTopLevel } = useContext(IdentifyContext);

  const doShortcut = (link, name) => {
    updateTopLevel(link, name);
    navigation.navigate('IdentifyScreen');
  };

  return (
    <SafeArea>
      <ScrollView>
        {shortcuts.map((t) =>
          t.members.length > 0 ? (
            <ShortcutWithMembers key={t.name} shortcut={t} doShortcut={doShortcut} />
          ) : (
            <ShortcutWithoutMembers key={t.name} shortcut={t} doShortcut={doShortcut} />
          )
        )}
      </ScrollView>
    </SafeArea>
  );
}
