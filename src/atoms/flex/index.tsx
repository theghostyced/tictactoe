import clsx from 'clsx';
import React from 'react';
import { ReactChildrenProps } from 'types';

import flexStyles from './flex.module.scss';
import { FlexJustifyOptions } from './type';

interface IProps extends ReactChildrenProps {
  className?: string;
  justify?: FlexJustifyOptions;
}

const Flex: React.FC<IProps> = ({ children, className = '', justify = 'normal' }) => {
  console.log('wa', flexStyles, `justify${justify}`)
  return (
    <div
      className={clsx(className, {
        [flexStyles.flex]: true,
        [flexStyles[`justify-${justify}`]]: true
      })}
    >
      {children}
    </div>
  );
};

export default Flex;
