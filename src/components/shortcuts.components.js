import React from 'react';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { theme } from '../theme';

const AccordionWithBackground = styled(List.Accordion)`
  background-color: ${(props) => props.theme.colors.ui[2]};
`;

const Header = styled(List.Item)`
  background-color: ${(props) => props.theme.colors.ui[1]};
`;

export function ShortcutWithMembers({ shortcut, doShortcut }) {
  return (
    <AccordionWithBackground
      title={shortcut.name}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={shortcut.common_name}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
    >
      <Header
        title={shortcut.name}
        titleStyle={{ fontFamily: theme.fonts.heading }}
        description={shortcut.common_name}
        descriptionStyle={{ fontFamily: theme.fonts.body }}
        onPress={() => doShortcut(shortcut.link, shortcut.name)}
      />
      {shortcut.members.map((s) =>
        s.members.length > 0 ? (
          <ShortcutWithMembers key={s.name} shortcut={s} doShortcut={doShortcut} />
        ) : (
          <ShortcutWithoutMembers key={s.name} shortcut={s} doShortcut={doShortcut} />
        )
      )}
      <Header />
    </AccordionWithBackground>
  );
}

export function ShortcutWithoutMembers({ shortcut, doShortcut }) {
  return (
    <List.Item
      title={shortcut.name}
      titleStyle={{ fontFamily: theme.fonts.heading }}
      description={shortcut.common_name}
      descriptionStyle={{ fontFamily: theme.fonts.body }}
      onPress={() => doShortcut(shortcut.link, shortcut.name)}
    />
  );
}
