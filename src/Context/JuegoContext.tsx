import { createContext } from 'react';
import { DatoPartida } from '../Modelos/DatoPartida';

export const juegoContexto = createContext({
  cantidadPartidas: [] as DatoPartida[],
  sumarPartida: (partida: DatoPartida) => {},
  cartas: [] as number[],
  listaJugador1: [] as DatoPartida[],
  listaJugador2: [] as DatoPartida[],
  setListaJugador1: (_: DatoPartida[]) => {},
  setListaJugador2: (_: DatoPartida[]) => {},
});
