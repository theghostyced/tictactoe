import { routePaths } from 'pages/routes';
import { StartScreenMachineStates } from 'pages/startscreen/machine';
import Navbar from 'presentational/navbar';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useMachine } from '@xstate/react';

interface IProps {
  machine: any;
}

const StartScreenContainer: React.FC<IProps> = ({ machine }) => {
  const [state, send] = useMachine(machine);
  const history = useHistory();

  const handleClick = () => {
    send(StartScreenMachineStates.GAME_STARTED);

    // TODO: Persist machine state in the indexedDB

    return history.push(routePaths.playerSelect);
  };

  return (
    <div role="group">
      <Navbar />
      {state.matches(StartScreenMachineStates.START_GAME.toLowerCase()) && (
        <button onClick={handleClick}>Start Game</button>
      )}
    </div>
  );
};

export default StartScreenContainer;
