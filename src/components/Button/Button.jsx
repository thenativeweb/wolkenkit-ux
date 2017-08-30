import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Hint = ({ children }) => (
  <span className={ styles.Hint }>
    { children }
  </span>
);

const Button = ({ adjust, children, id, onClick, size, type }) => {
  const buttonClassNames = classNames(styles.Button, {
    [styles.AdjustFlex]: adjust === 'flex',
    [styles.AdjustAuto]: adjust === 'auto',
    [styles.SizeDefault]: size === 'default',
    [styles.SizeS]: size === 's',
    [styles.TypeLink]: type === 'link'
  });

  return (
    <button id={ id } className={ buttonClassNames } onClick={ onClick }>
      { children }
    </button>
  );
};

Button.propTypes = {
  adjust: PropTypes.oneOf([ 'flex', 'auto' ]),
  size: PropTypes.oneOf([ 'default', 's' ]),
  type: PropTypes.oneOf([ 'link' ])
};

Button.defaultProps = {
  adjust: undefined,
  size: 'default',
  type: undefined
};

Button.Hint = Hint;

export default Button;
