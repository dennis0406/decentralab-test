import ArrowRight from './ArrowRight';
import BoundingBox from './BoundingBox';
import DottedLine from './DottedLine';
import GraphLine from './GraphLine';
import LightbulbFilament from './LightbulbFilament';
import MedalMilitary from './MedalMilitary';
import Tier1 from './Tier1';
import Tier2 from './Tier2';
import Tier3 from './Tier3';
import Tier4 from './Tier4';
import Tier5 from './Tier5';
import Tier6 from './Tier6';
import TreasureChest from './TreasureChest';
import UsersFour from './UsersFour';

const glyphs = {
  arrowRight: ArrowRight,
  boundingBox: BoundingBox,
  dottedLine: DottedLine,
  graphLine: GraphLine,
  lightbulbFilament: LightbulbFilament,
  medalMilitary: MedalMilitary,
  tier1: Tier1,
  tier2: Tier2,
  tier3: Tier3,
  tier4: Tier4,
  tier5: Tier5,
  tier6: Tier6,
  treasureChest: TreasureChest,
  usersFour: UsersFour,
};

export type GlyphsType = {
  glyph: keyof typeof glyphs;
};

export { glyphs };
