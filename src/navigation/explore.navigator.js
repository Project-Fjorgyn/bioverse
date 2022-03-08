import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PhenologyScreen } from '../screens/phenology.screen';
import { WebViewScreen } from '../screens/webview.screen';

const Stack = createStackNavigator();

export function ExploreNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} gesturesEnabled>
      <Stack.Screen name="PhenologyScreen" component={PhenologyScreen} />
      <Stack.Screen
        name="WebViewScreen"
        options={{ gestureDirection: 'horizontal' }}
        component={WebViewScreen}
      />
    </Stack.Navigator>
  );
}
