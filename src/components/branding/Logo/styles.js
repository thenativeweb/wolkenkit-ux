import theme from '../../../theme';

const styles = {
  '@keyframes move-cloud': {
    '0%': { transform: 'translate3d(0px, 0, 0)' },
    '50%': { transform: 'translate3d(83px, 5px, 0)' },
    '100%': { transform: 'translate3d(166px, 0, 0)' }
  },

  Logo: {
    '& .box': {
      fill: theme.color.brand.grey
    },
    '& .cloud-nr9': {
      animationName: 'move-cloud',
      animationDuration: '50s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationFillMode: 'both',
      opacity: 0.9,
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform'
    },
    '& .cloud-nr10': {
      animationName: 'move-cloud',
      animationDuration: '30s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationFillMode: 'both',
      opacity: 0.95,
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform'
    }
  },

  SizeSmall: {
    width: '64px',
    height: '64px'
  },

  SizeLarge: {
    width: '220px',
    height: '220px'
  },

  [`@media only screen and (max-width : ${theme.breakpoint.medium})`]: {
    SizeLarge: {
      width: '100px',
      height: '100px'
    }
  }
};

export default styles;
