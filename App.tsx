import React from 'react';
import JuegosProvider from './src/Provider/JuegosProvider';
import Navigation from './src/Navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <JuegosProvider>
      <Navigation />
      <StatusBar style="auto" />
    </JuegosProvider>
  );
}
