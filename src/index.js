import addFonts from './addFonts';
import Brand from './components/branding/Brand';
import jss from 'jss';
import preset from 'jss-preset-default';
import View from './components/View';

addFonts();

jss.setup(preset());

export { Brand, View };
