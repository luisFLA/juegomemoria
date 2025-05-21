import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import GameScreen from './components/GameScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Juego" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
