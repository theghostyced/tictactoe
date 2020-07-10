import React from 'react';
import PlayerSelectContainer from 'containers/playerselect';
import PlayerSelectMachine from './machine';

const PlayerSelectScreen = () => {
  return <PlayerSelectContainer machine={PlayerSelectMachine}/>;
};

export default PlayerSelectScreen;
