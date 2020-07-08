import StartScreenContainer from 'containers/startscreen';
import React from 'react';

import StartScreenMachine from './machine';

const StartScreen: React.FC = () => {
  return <StartScreenContainer machine={StartScreenMachine} />;
};

export default StartScreen;
