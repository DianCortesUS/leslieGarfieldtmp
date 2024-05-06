/*

Temporary map for using typography variants

h1 -> ~70px (Copernicus)
h2 -> ~50px (Copernicus)
h3 -> ~40px (Copernicus)
h4 -> ~34px (Copernicus)
h5 -> ~28px (Copernicus)
h6 -> ~22px (Copernicus)
body1 -> ~18px (Copernicus)
body2 -> ~18px (Arial)
subtitle1 -> ~16px (Copernicus)
subtitle2 -> ~16px (Arial)
caption -> ~12px (Copernicus)
overline -> ~12px (Arial)

*/

const primaryFontFamily = 'Copernicus';
const secondaryFontFamily = 'Sweet Sans';

export default {
  fontFamily: `${primaryFontFamily}, ${secondaryFontFamily}, "Lucida Grande", sans-serif`,
  h1: {
    fontSize: '4.3rem',
    lineHeight: 1.35,
    fontWeight: 500,
    fontStyle: 'italic',
  },
  h2: {
    fontSize: '3.2rem',
    fontWeight: 500,
    lineHeight: 1.35,
    fontStyle: 'italic',
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: 500,
    lineHeight: 1.35,
    fontStyle: 'italic',
  },
  h4: {
    fontSize: '2.2rem',
    fontWeight: 500,
    lineHeight: 1.35,
    fontStyle: 'italic',
  },
  h5: {
    fontSize: '1.8rem',
    fontWeight: 500,
    lineHeight: 1.35,
    fontStyle: 'italic',
  },
  h6: {
    fontSize: '28px',
    fontWeight: 500,
    lineHeight: 1.35,
    fontStyle: 'italic',
  },
  body1: {
    fontSize: '1.15rem',
    fontWeight: 500,
    lineHeight: 1.65,
    fontFamily: primaryFontFamily,
  },
  body2: {
    fontSize: '1.15rem',
    fontWeight: 500,
    lineHeight: 1.65,
    fontFamily: secondaryFontFamily,
  },
  body3: {
    fontSize: '1.20rem',
    fontWeight: 500,
    lineHeight: 1.65,
    fontFamily: primaryFontFamily,
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.65,
  },
  subtitle2: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.65,
    fontFamily: secondaryFontFamily,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.35,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.35,
    fontFamily: secondaryFontFamily,
  },
  filters: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.35,
    fontFamily: secondaryFontFamily,
  } 
};
