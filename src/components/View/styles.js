import theme from '../../theme';

const styles = {
  View: {
    position: 'relative',
    fontFamily: theme.font.family.default
  },

  AdjustFlex: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%'
  },

  AdjustAuto: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto'
  },

  OrientationCentered: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },

  OrientationHorizontal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden'
  },

  OrientationVertical: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },

  AlignItemsCenter: {
    alignItems: 'center'
  },

  JustifyContentCenter: {
    justifyContent: 'center'
  }
};

export default styles;
