import { assign, createMachine } from 'xstate';

export const PlayerSelectMachineStates = {
  PLAYER_SELECT: 'PLAYER_SELECT',
  PLAYER_SELECTED: 'PLAYER_SELECTED',
}

export interface PlayerSelectContext {
  player: string | null;
}

export interface PlayerEvent {
  type: string;
  player_type: string | null;
}

const PlayerSelectMachine = createMachine<PlayerSelectContext, PlayerEvent>({
  id: 'playerselect',
  initial: PlayerSelectMachineStates.PLAYER_SELECT.toLowerCase(),
  context: {
    player: null
  },
  states: {
    player_select: {
      on: {
        [PlayerSelectMachineStates.PLAYER_SELECTED]: {
          target: PlayerSelectMachineStates.PLAYER_SELECTED.toLowerCase(),
          actions: assign({
            player: (_, event: PlayerEvent) => event.player_type
          })
        }
      }
    },
    player_selected: {}
  }
});

export default PlayerSelectMachine;
