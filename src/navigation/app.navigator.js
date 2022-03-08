import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../theme';
import { PhenologyScreen } from '../screens/phenology.screen';
import { SettingsScreen } from '../screens/settings.screen';
import { IdentifyNavigator } from './identify.navigator';
import { IdentifyContextProvider } from '../context/identify/identify.context';
import { ShortcutsContextProvider } from '../context/shortcuts.context';
import { PhenologyContextProvider } from '../context/phenology.context';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <ShortcutsContextProvider>
        <IdentifyContextProvider>
          <PhenologyContextProvider>
            <Tab.Navigator
              initialRouteName="Explore"
              screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: theme.colors.ui[0] },
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Explore') {
                    iconName = focused ? 'walk-outline' : 'walk';
                  } else if (route.name === 'Identify') {
                    iconName = focused ? 'search-circle' : 'search-circle-outline';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.ui[3],
                tabBarInactiveTintColor: theme.colors.ui[3],
              })}
            >
              <Tab.Screen name="Identify" component={IdentifyNavigator} />
              <Tab.Screen name="Explore" component={PhenologyScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </PhenologyContextProvider>
        </IdentifyContextProvider>
      </ShortcutsContextProvider>
    </NavigationContainer>
  );
}
