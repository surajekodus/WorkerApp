import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name="home" color={focused ? '#3184b6' : '#000'}  size={30} />
            ),
            tabBarShowLabel: true,
            headerShown: true,
            labelStyle: {
              margin: 0,
            },
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name="settings" color={focused ? '#3184b6' : '#000'}  size={30} />
            ),
            tabBarShowLabel: true,
            headerShown: false,
            labelStyle: {
              margin: 0,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
