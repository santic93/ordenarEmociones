export default function ordenarEmociones(emociones, orden) {
  // TODO: implementar
  const emocionesPosibles = { T_T: 1, ':(': 2, ':|': 3, ':)': 4, ':D': 5 };
  const ordenoEmociones = emociones.sort((a, b) => {
    return emocionesPosibles[b] - emocionesPosibles[a];
  });
  {
    orden ? ordenoEmociones : ordenoEmociones.reverse();
  }
}

