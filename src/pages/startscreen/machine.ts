import { assign, createMachine } from 'xstate';

export const StartScreenMachineStates = {
  START_GAME: 'START_GAME',
  GAME_STARTED: 'GAME_STARTED',
  END_GAME: 'END_GAME'
};

export interface StartScreenContext {
  started_game: boolean;
}

const StartScreenMachine = createMachine<StartScreenContext>({
  id: 'startscreen',
  initial: StartScreenMachineStates.START_GAME.toLowerCase(),
  context: {
    started_game: false,
  },

  states: {
    start_game: {
      on: {
        [StartScreenMachineStates.GAME_STARTED]: StartScreenMachineStates.GAME_STARTED.toLowerCase(),
      }
    },


    game_started: {
      entry: assign({
        started_game: (ctx: StartScreenContext) => !ctx.started_game
      }),

      on: {
        // ends the game and resets our started game context to false
        [StartScreenMachineStates.END_GAME]: {
          target: StartScreenMachineStates.END_GAME.toLowerCase(),
          actions: assign((ctx: StartScreenContext) => {
            return {
              started_game: false
            }
          })
        }
      }
    },


    end_game: {},
  }
})

export default StartScreenMachine
