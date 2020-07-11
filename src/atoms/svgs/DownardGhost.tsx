import React from 'react';
import { SVGBaseProps } from 'types';

interface IProps extends SVGBaseProps {}

const DownardGhost: React.FC<IProps> = ({ width = 59, height = 99 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 59 99"
    >
      <g id="Group_3" data-name="Group 3" transform="translate(-288)">
        <path
          id="Rectangle_17"
          data-name="Rectangle 17"
          d="M0,0H59a0,0,0,0,1,0,0V69.5A29.5,29.5,0,0,1,29.5,99h0A29.5,29.5,0,0,1,0,69.5V0A0,0,0,0,1,0,0Z"
          transform="translate(288)"
          fill="#fff"
        />
        <circle
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="5"
          cy="5"
          r="5"
          transform="translate(327 73)"
          fill="#272755"
        />
        <ellipse
          id="Ellipse_3"
          data-name="Ellipse 3"
          cx="3.5"
          cy="1.5"
          rx="3.5"
          ry="1.5"
          transform="translate(312 90)"
          fill="#272755"
        />
        <circle
          id="Ellipse_2"
          data-name="Ellipse 2"
          cx="5"
          cy="5"
          r="5"
          transform="translate(298 73)"
          fill="#272755"
        />
      </g>
    </svg>
  );
};

export default DownardGhost;
