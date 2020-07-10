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
  const [, send] = useMachine<PlayerSelectContext, PlayerEvent>(machine);
  const history = useHistory();

  const handleSelect = (event: any) => {
    send({
      type: PlayerSelectMachineStates.PLAYER_SELECTED,
      player_type: event.target.value,
    });
  };

  const handleConfirm = () => history.push(routePaths.gameScene);

  return (
    <div role="group">
      <label htmlFor="player-X">X</label>
      <input
        id="player-X"
        name="radio"
        type="radio"
        onChange={handleSelect}
        value={'X'}
      />
      <label htmlFor="player-O">O</label>
      <input
        id="player-O"
        name="radio"
        type="radio"
        onChange={handleSelect}
        value={'O'}
      />
      <button onClick={() => handleConfirm()}>Confirm</button>
    </div>
  );
};

export default PlayerSelectContainer;
