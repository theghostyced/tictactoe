import React from 'react';
import { SVGBaseProps } from 'types';

interface IProps extends SVGBaseProps {}

const SmallLogo: React.FC<IProps> = ({ width = 51, height = 59 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 51 59"
    >
      <g id="Group_4" data-name="Group 4" transform="translate(-7 -8)">
        <rect
          id="Rectangle_12"
          data-name="Rectangle 12"
          width="51"
          height="59"
          rx="10"
          transform="translate(7 8)"
          fill="#26265c"
        />
        <rect
          id="Rectangle_13"
          data-name="Rectangle 13"
          width="22"
          height="22"
          rx="1"
          transform="translate(10 33)"
          fill="#4b4973"
        />
        <rect
          id="Rectangle_14"
          data-name="Rectangle 14"
          width="22"
          height="22"
          rx="1"
          transform="translate(34 10)"
          fill="#4b4973"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="22"
          height="22"
          rx="1"
          transform="translate(34 33)"
          fill="#fd956a"
        />
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="22"
          height="22"
          rx="1"
          transform="translate(10 10)"
          fill="#e970ac"
        />
        <path
          id="Rectangle_8"
          data-name="Rectangle 8"
          d="M0,0H22a0,0,0,0,1,0,0V0a1,1,0,0,1-1,1H1A1,1,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
          transform="translate(10 31)"
          fill="#8f4269"
        />
        <path
          id="Rectangle_15"
          data-name="Rectangle 15"
          d="M0,0H22a0,0,0,0,1,0,0V0a1,1,0,0,1-1,1H1A1,1,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
          transform="translate(34 54)"
          fill="#a25b3c"
        />
        <text
          id="X"
          transform="translate(21 23)"
          fill="rgba(249,250,248,0.45)"
          font-size="11"
          font-family="BRUX-Regular, BRUX"
          letter-spacing="0.05em"
        >
          <tspan x="-4.064" y="0">
            X
          </tspan>
        </text>
        <text
          id="O"
          transform="translate(45 46)"
          fill="rgba(249,250,248,0.45)"
          font-size="11"
          font-family="BRUX-Regular, BRUX"
          letter-spacing="0.05em"
        >
          <tspan x="-4.043" y="0">
            O
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default SmallLogo;
