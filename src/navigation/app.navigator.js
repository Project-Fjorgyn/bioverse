import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../theme';
import { ShortcutsScreen } from '../screens/shortcuts.screen';
import { IdentifyScreen } from '../screens/identify.screen';
import { SettingsScreen } from '../screens/settings.screen';
import { IdentifyContextProvider } from '../context/identify.context';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <IdentifyContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: theme.colors.ui[0] },
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Shortcuts') {
                iconName = focused ? 'save' : 'save-outline';
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
          <Tab.Screen name="Shortcuts" component={ShortcutsScreen} />
          <Tab.Screen name="Identify" component={IdentifyScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </IdentifyContextProvider>
    </NavigationContainer>
  );
}
