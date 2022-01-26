import React, { useContext } from 'react';

import { AuthContext } from '../context/auth.context';
import { TitleBackground } from '../components/title-background.components';
import { Brand } from '../components/typography.components';
import { ActionButton } from '../components/buttons.components';

export function TitleScreen({ navigation }) {
  const { onLogin } = useContext(AuthContext);
  return (
    <TitleBackground>
      <Brand>Bioverse</Brand>
      <ActionButton onPress={onLogin}>Let's Go!</ActionButton>
    </TitleBackground>
  );
}
