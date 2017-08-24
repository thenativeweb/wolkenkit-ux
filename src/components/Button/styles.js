import theme from '../../theme';

const styles = {
  Button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.color.brand.highlight,
    color: theme.color.brand.white,
    fontFamily: theme.font.family.default,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderRadius: theme.components.borderRadiusDefault,
    border: `1px solid ${theme.color.brand.highlight}`,
    outline: 'none',
    '&:focus': {
      border: `1px solid ${theme.color.interaction.focus}`
    },
    '&:last-child': {
      marginRight: 0
    }
  },

  AdjustFlex: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%'
  },

  AdjustAuto: {
    flexGrow: 0,
    flexShrink: 0
  },

  SizeDefault: {
    padding: '7px 11px',
    margin: '16px',
    marginLeft: 0,
    fontSize: theme.font.size.default
  },

  SizeSmall: {
    padding: '7px 11px',
    fontSize: theme.font.size.medium,
    margin: 0,
    marginRight: '6px'
  },

  TypeLink: {
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    padding: '16px',
    margin: 0,
    color: theme.color.highlight,
    background: 'none',
    outline: 'none',
    border: 'none',
    '&:focus': {
      border: 'none',
      textDecoration: 'underline'
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  },

  Hint: {
    opacity: 0.5,
    fontSize: theme.font.size.medium,
    paddingLeft: '0.75em'
  }
};

export default styles;
