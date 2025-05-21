import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ListaJugador1 from './ListaJugador1';
import ListaJugador2 from './ListaJugador2';
import { useNavigation } from '@react-navigation/native';

export default function GameScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ListaJugador1 />
      <ListaJugador2 />
      <Button title="Volver al Inicio" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
});
