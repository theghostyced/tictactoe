import { createMachine } from 'xstate';

export const PlayerSelectMachineStates = {
  PLAYER_X: 'X',
  PLAYER_O: 'O'
}

const PlayerSelectMachine = createMachine({
  id: 'playerselect',
  context: {
    player: null
  }
});

export default PlayerSelectMachine;
