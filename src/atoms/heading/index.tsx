import React from 'react';
import { ReactChildrenProps } from 'types';

import { HeadingType } from './types';

interface IProps extends ReactChildrenProps {
  as: HeadingType;
}

const Heading: React.FC<IProps> = ({ as, children, ...props }) => {
  return React.createElement(as, [props], children);
};

export default Heading;
