import React, { useContext } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

import { SafeArea } from '../components/containers.components';
import { theme } from '../theme';
import { AuthContext } from '../context/auth.context';

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <SafeArea>
      <ScrollView>
        <List.Item
          title="Logout"
          titleStyle={{ fontFamily: theme.fonts.heading }}
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </ScrollView>
    </SafeArea>
  );
};
