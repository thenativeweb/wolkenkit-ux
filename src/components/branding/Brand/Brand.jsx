import classNames from 'classnames';
import injectSheet from 'react-jss';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Brand = ({ classes, isCollapsed, showLogo, suffix, size }) => {
  const brandClassNames = classNames(classes.Brand, {
    [classes.Collapsed]: isCollapsed,
    [classes.SizeSmall]: size === 'small',
    [classes.SizeLarge]: size === 'large'
  });

  return (
    <div className={ brandClassNames }>
      <Logo isVisible={ showLogo } size={ size } />
      <div className={ 'typo' }><span>wolken</span>kit</div>
      <div className={ 'suffix' }>{ suffix }</div>
    </div>
  );
};

Brand.propTypes = {
  showLogo: PropTypes.bool,
  size: PropTypes.oneOf([ 'small', 'large' ]),
  /** A suffix that will be added below the typo. */
  suffix: PropTypes.string
};

Brand.defaultProps = {
  showLogo: true,
  size: 'large',
  suffix: undefined
};

export default injectSheet(styles)(Brand);
