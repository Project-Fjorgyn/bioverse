import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TitleScreen } from '../screens/title.screen';

const Stack = createStackNavigator();

export function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} gesturesEnabled>
        <Stack.Screen name="Title" component={TitleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
