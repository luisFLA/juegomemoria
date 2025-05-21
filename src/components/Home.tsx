import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import React, { useState } from 'react';
import { useJuegoContext } from '../Provider/JuegosProvider';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { sumarPartida, cartas, cantidadPartidas } = useJuegoContext();
  const navigation = useNavigation();
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState<number[]>([]);

  function seleccionarCarta(item: number) {
    const nuevasSeleccionadas = [...cartasSeleccionadas, item];
    setCartasSeleccionadas(nuevasSeleccionadas);

    if (nuevasSeleccionadas.length === 2) {
      if (nuevasSeleccionadas[0] === nuevasSeleccionadas[1]) {
        Alert.alert('Ganó la partida');
        sumarPartida({
          id: Date.now(), 
          descripcion: 'Partida Ganada'
        });
      } else {
        Alert.alert('Partida Finalizada');
        sumarPartida({
          id: Date.now(),
          descripcion: 'Partida Perdida'
        });
      }
      setCartasSeleccionadas([]);
    }
  }

  return (
    <View>
      <Button title="Ir al Juego" onPress={() => navigation.navigate('Juego' as never)} />

      <FlatList
        data={cartas}
        keyExtractor={(_, i) => i.toString()}
        numColumns={4}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => seleccionarCarta(item)}>
            <Text style={styles.cardText}>S</Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={cantidadPartidas}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText2}>Partida #{item.id}</Text>
            <Text style={styles.cardSubText}>
              Resultado: {item.descripcion}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { alignItems: "center", marginTop: 24 },
  card: {
    width: 70,
    height: 90,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#9e9e9e",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  cardText: { fontSize: 26, color: "#fff" },
  listContainer: {
    paddingBottom: 24,
  },
  cardText2: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardSubText: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
});
