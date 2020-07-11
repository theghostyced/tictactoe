import Flex from 'atoms/flex';
import DownardGhost from 'atoms/svgs/DownardGhost';
import SmallLogo from 'atoms/svgs/smallLogo';
import React from 'react';

import navbarStyles from './navbar.module.scss';

interface IProps {
  hideLeftIcon?: boolean;
  hideRightIcon?: boolean;
}

const Navbar: React.FC<IProps> = ({
  hideLeftIcon = false,
  hideRightIcon = false,
}) => {
  return (
    <div className={navbarStyles.navbar} role="rowgroup">
      <Flex justify="spaceBetween">
        {!hideLeftIcon && <SmallLogo style={{ marginTop: '5px' }} />}
        {!hideRightIcon && <DownardGhost />}
      </Flex>
    </div>
  );
};

export default Navbar;
