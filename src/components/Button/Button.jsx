import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Hint = ({ classes, children }) => (
  <span className={ classes.Hint }>
    { children }
  </span>
);

const Button = ({ adjust, classes, children, id, onClick, size, type }) => {
  const buttonClassNames = classNames(classes.Button, {
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.SizeDefault]: size === 'default',
    [classes.SizeSmall]: size === 'small',
    [classes.TypeLink]: type === 'link'
  });

  return (
    <button id={ id } className={ buttonClassNames } onClick={ onClick }>
      { children }
    </button>
  );
};

Button.propTypes = {
  adjust: PropTypes.oneOf([ 'flex', 'auto' ]),
  size: PropTypes.oneOf([ 'small', 'default' ]),
  type: PropTypes.oneOf([ 'link' ])
};

Button.defaultProps = {
  adjust: undefined,
  size: 'default',
  type: undefined
};

Button.Hint = injectSheet(styles)(Hint);

export default injectSheet(styles)(Button);
