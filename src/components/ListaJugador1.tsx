import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { juegoContexto } from '../Context/JuegoContext';

const ListaJugador1 = () => {
  const { listaJugador1 } = useContext(juegoContexto);

  return (
    <View>
      <Text>Cartas del Jugador 1:</Text>
      {listaJugador1.map((item, index) => (
        <Text key={index}>{item.nombre}</Text>
      ))}
    </View>
  );
};

export default ListaJugador1;
