import ArrowRight from './ArrowRight';

const glyphs = {
  arrowRight: ArrowRight,
};

export type GlyphsType = {
  glyph: keyof typeof glyphs;
};

export { glyphs };
