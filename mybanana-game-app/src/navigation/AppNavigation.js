import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../WelcomePage';
import BananaGame from '../BananaGame';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

// Aqui criamos o "stack navigator", que é a função responsável por definir a navegação
const Stack = createStackNavigator(); 

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/* Aqui estamos dizendo que vamos usar a navegação por pilha */}
      <Stack.Navigator initialRouteName="WelcomePage">
        {/* Definindo as telas da navegação */}
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="BananaGame" component={BananaGame} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation; 
