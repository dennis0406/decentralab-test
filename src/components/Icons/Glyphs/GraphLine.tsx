import { FC } from 'react';

import type { GlyphIconType } from '../types';

const GraphLine: FC<GlyphIconType> = ({ className }) => {
  return (
    <svg
      className={`object-contain duration-500 ${className}`}
      width="364"
      height="169"
      viewBox="0 0 364 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M362 1C299 85 138 151 0 169"
        stroke="url(#paint0_linear_1_331)"
        stroke-width="0.77401"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_331"
          x1="-42.3764"
          y1="188.229"
          x2="387.172"
          y2="-15.1803"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="0.305208" stop-color="#4EAEFD" />
          <stop offset="0.785308" stop-color="#4EAEFD" />
          <stop offset="0.971466" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GraphLine;
