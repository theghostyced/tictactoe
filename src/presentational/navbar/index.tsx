import React from 'react'
import Flex from 'atoms/flex'
import SmallLogo from 'atoms/svgs/smallLogo'

interface IProps {
  hideLeftIcon?: boolean;
  hideRightIcon?: boolean;
}

const Navbar: React.FC<IProps> = ({ hideLeftIcon = false, hideRightIcon = false }) => {
  return (
    <div role="rowgroup">
      <Flex justify="spaceBetween">
        {
          !hideLeftIcon && (
            <SmallLogo />
          )
        }

      </Flex>
    </div>
  )
}

export default Navbar
