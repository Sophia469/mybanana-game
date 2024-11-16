// src/navigation/AppNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../WelcomePage';
import BananaGame from '../BananaGame';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="BananaGame" component={BananaGame} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
