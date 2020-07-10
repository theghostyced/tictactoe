import {
  PlayerEvent,
  PlayerSelectContext,
  PlayerSelectMachineStates,
} from 'pages/playerselect/machine';
import { routePaths } from 'pages/routes';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useMachine } from '@xstate/react';

interface IProps {
  machine: any;
}

const PlayerSelectContainer: React.FC<IProps> = ({ machine }) => {
  const [state, send] = useMachine<PlayerSelectContext, PlayerEvent>(machine);
  const history = useHistory();

  const handleClick = (character: string) => {
    send({
      type: PlayerSelectMachineStates.PLAYER_SELECTED,
      player_type: character,
    });

    history.push(routePaths.gameScene);
  };

  return (
    <div role="group">
      <button onClick={() => handleClick('X')}>X</button>
      <button onClick={() => handleClick('O')}>O</button>
    </div>
  );
};

export default PlayerSelectContainer;
