import { assign, createMachine } from 'xstate';

export const StartScreenMachineStates = {
  START_GAME: 'START_GAME',
};

interface StartScreenContext {
  started_game: boolean;
}

const StartScreenMachine = createMachine<StartScreenContext>({
  id: 'startscreen',
  initial: 'start_game',
  context: {
    started_game: false,
  },
  states: {
    start_game: {
      on: {
        [StartScreenMachineStates.START_GAME]: "game_started"
      }
    },
    game_started: {
      entry: assign({
        started_game: (ctx: StartScreenContext) => !ctx.started_game
      }),
    },
    exit: {
      entry: ''
    }
  }
})

export default StartScreenMachine
