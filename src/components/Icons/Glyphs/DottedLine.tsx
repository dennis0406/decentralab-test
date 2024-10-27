import { FC } from 'react';

import type { GlyphIconType } from '../types';

const DottedLine: FC<GlyphIconType> = ({ className, color }) => {
  return (
    <svg
      width="373"
      className={`object-contain duration-500 ${className}`}
      height="189"
      viewBox="0 0 373 189"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.42"
        d="M0.0830064 156.841L373 156.841M0.0830078 188.229L373 188.229M0.0830051 125.453L373 125.453M0.0830037 94.6149L373 94.6149M0.0830023 63.2265L373 63.2265M0.083001 32.3888L373 32.3888M0.0829996 1.00039L373 1.00038"
        stroke="url(#paint0_radial_1_330)"
        strokeWidth="0.359629"
        strokeDasharray="2.88 2.88"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1_330"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(186.542 92.8251) scale(186.459 123.076)"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default DottedLine;
