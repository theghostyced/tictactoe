import { StartScreenMachineStates } from 'pages/startscreen/machine';
import React from 'react';

import { useMachine } from '@xstate/react';

interface IProps {
  machine: any;
}

const StartScreenContainer: React.FC<IProps> = ({ machine }) => {
  const [state, send] = useMachine(machine);

  return(
    <div>
      {state.value}
    </div>
  )
}

export default StartScreenContainer
