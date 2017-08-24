import theme from '../../../theme';

const styles = {
  Brand: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.font.family.headline,
    background: theme.color.brand.grey,

    '& .typo': {
      fontWeight: 500,
      color: theme.color.brand.highlight,
      '& span': {
        color: theme.color.brand.white
      }
    },

    '& .suffix': {
      textAlign: 'center',
      color: theme.color.brand.white
    }
  },

  Collapsed: {
    '& *': {
      'animation-name': 'none'
    }
  },

  SizeLarge: {
    '& .typo': {
      fontSize: theme.font.size.xlarge
    },

    '& .suffix': {
      fontSize: theme.font.size.large
    }
  },

  SizeSmall: {
    '& .typo': {
      fontSize: theme.font.size.medium
    },

    '& .suffix': {
      fontSize: theme.font.size.medium
    }
  },

  [`@media only screen and (max-width : ${theme.breakpoint.medium})`]: {
    SizeLarge: {
      '& .typo': {
        fontSize: theme.font.size.large
      },

      '& .suffix': {
        fontSize: theme.font.size.medium
      }
    }
  }
};

export default styles;
