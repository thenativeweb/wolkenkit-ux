import enableFonts from './enableFonts';
import enableIcons from './enableIcons';

import fonts from '../fonts';
import icons from '../icons';

const setup = {
  client () {
    enableFonts();
    enableIcons();
  },

  server: {
    head () {
      return `<link rel="stylesheet" href="${fonts}" />`;
    },
    body () {
      return `<svg xmlns="http://www.w3.org/2000/svg">${icons}</svg>`;
    }
  }
};

export default setup;
