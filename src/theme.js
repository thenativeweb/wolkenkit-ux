const color = {};

color.brand = {
  grey: '#2f333b',
  highlight: '#29abe2',

  darkGrey: '#363D45',
  midGrey: '#eee',
  lightGrey: '#f7f7f7',
  white: '#fff'
};
color.content = {
  background: color.brand.white,
  panelLight: color.brand.lightGrey,
  panelDark: color.brand.darkGrey,
  border: color.brand.midGrey,
  copytext: '#232323'
};
color.interaction = {
  focus: color.brand.darkGrey
};

const font = {
  size: {
    medium: '14px',
    default: '16px',
    large: '18px',
    xlarge: '26px',
    code: '15px',
    copytext: '18px'
  },
  family: {
    default: '"Source Sans Pro", Arial, Helvetica, sans-serif',
    headline: '"Ubuntu", sans-serif',
    code: '"Ubuntu Mono", monospace !important'
  }
};

const breakpoint = {
  medium: '768px'
};

const components = {
  borderRadiusDefault: '1x'
};

const icon = {
  dimension: {
    xsmall: '14px',
    small: '16px',
    medium: '20px'
  }
};

const grid = {
  stepSize: 10
};

const zIndex = {
  content: 100,
  contentOverlay: 100,
  navigation: 1000,
  menu: 2000,
  modal: 3000,
  overlay: 4000,
  transfer: 5000
};

export { color, components, font, zIndex, icon, grid, breakpoint };

export default { color, components, font, zIndex, icon, grid, breakpoint };
