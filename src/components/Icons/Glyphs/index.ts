import ArrowRight from './ArrowRight';
import DottedLine from './DottedLine';
import Tier1 from './Tier1';
import Tier2 from './Tier2';
import Tier3 from './Tier3';
import Tier4 from './Tier4';
import Tier5 from './Tier5';
import Tier6 from './Tier6';

const glyphs = {
  arrowRight: ArrowRight,
  dottedLine: DottedLine,
  tier1: Tier1,
  tier2: Tier2,
  tier3: Tier3,
  tier4: Tier4,
  tier5: Tier5,
  tier6: Tier6,
};

export type GlyphsType = {
  glyph: keyof typeof glyphs;
};

export { glyphs };
