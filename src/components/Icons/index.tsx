import { FC } from 'react';

import { glyphs } from './Glyphs';
import type { IconsType } from './types';
import { colors } from '@/styles/colors';

const Icons: FC<IconsType> = ({ className = '', color = colors.blue[700], glyph, onClick }) => {
  const Glyph = glyph && glyphs[glyph];

  if (Glyph) {
    return <Glyph className={className} color={color} onClick={onClick} />;
  }
  return null;
};

export default Icons;
