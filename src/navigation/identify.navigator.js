import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { IdentifyScreen } from '../screens/identify.screen';
import { ShortcutsScreen } from '../screens/shortcuts.screen';

const Stack = createStackNavigator();

export function IdentifyNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} gesturesEnabled>
      <Stack.Screen name="ShortcutsScreen" component={ShortcutsScreen} />
      <Stack.Screen
        name="IdentifyScreen"
        options={{ gestureDirection: 'horizontal' }}
        component={IdentifyScreen}
      />
    </Stack.Navigator>
  );
}
