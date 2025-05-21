import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { juegoContexto } from '../Context/JuegoContext';

const ListaJugador2 = () => {
  const { listaJugador2 } = useContext(juegoContexto);

  return (
    <View>
      <Text>Cartas del Jugador 2:</Text>
      {listaJugador2.map((item, index) => (
        <Text key={index}>{item.nombre}</Text>
      ))}
    </View>
  );
};

export default ListaJugador2;
