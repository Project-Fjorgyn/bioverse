import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../theme';
import { PhenologyContextProvider } from '../context/phenology.context';
import { InfoContextProvider } from '../context/info.context';
import { LocationContextProvider } from '../context/location.context';
import { LearnScreen } from '../screens/learn.screen';
import { PhenologyScreen } from '../screens/phenology.screen';
import { MapScreen } from '../screens/map.screen';
import { MapContextProvider } from '../context/map.context';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <PhenologyContextProvider>
        <InfoContextProvider>
          <MapContextProvider>
            <LocationContextProvider>
              <Tab.Navigator
                initialRouteName="Explore"
                screenOptions={({ route }) => ({
                  tabBarStyle: { backgroundColor: theme.colors.ui[0] },
                  headerShown: false,
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Explore') {
                      iconName = focused ? 'walk-outline' : 'walk';
                    } else if (route.name === 'Find') {
                      iconName = focused ? 'search-circle' : 'search-circle-outline';
                    } else if (route.name === 'Learn') {
                      iconName = focused ? 'book' : 'book-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: theme.colors.ui[3],
                  tabBarInactiveTintColor: theme.colors.ui[3],
                })}
              >
                <Tab.Screen name="Explore" component={PhenologyScreen} />
                <Tab.Screen name="Find" component={MapScreen} />
                <Tab.Screen name="Learn" component={LearnScreen} />
              </Tab.Navigator>
            </LocationContextProvider>
          </MapContextProvider>
        </InfoContextProvider>
      </PhenologyContextProvider>
    </NavigationContainer>
  );
}
