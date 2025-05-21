import React, { useState, useContext } from 'react';
import { Plantilla } from '../Modelos/Plantilla';
import { juegoContexto } from '../Context/JuegoContext';
import { DatoPartida } from '../Modelos/DatoPartida';

export default function JuegosProvider(props: Plantilla) {
  const [cantidadPartidas, setCantidadPartidas] = useState<DatoPartida[]>([]);
  const [cartas, setCartas] = useState<number[]>([1, 2, 3, 4, 1, 2, 3, 4]);

  const [listaJugador1, setListaJugador1] = useState<DatoPartida[]>([]);
  const [listaJugador2, setListaJugador2] = useState<DatoPartida[]>([]);

  function sumarPartida(partida: DatoPartida) {
    setCantidadPartidas([...cantidadPartidas, partida]);
  }

  return (
    <juegoContexto.Provider
      value={{
        cantidadPartidas,
        cartas,
        sumarPartida,
        listaJugador1,
        listaJugador2,
        setListaJugador1,
        setListaJugador2,
      }}
    >
      {props.children}
    </juegoContexto.Provider>
  );
}

export function useJuegoContext() {
  return useContext(juegoContexto);
}
