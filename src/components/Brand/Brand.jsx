import classNames from 'classnames';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Brand = ({ isCollapsed, showLogo, suffix, size }) => {
  const brandClassNames = classNames(styles.Brand, {
    [styles.Collapsed]: isCollapsed,
    [styles.SizeSmall]: size === 'small',
    [styles.SizeLarge]: size === 'large'
  });

  return (
    <div className={ brandClassNames }>
      <Logo isVisible={ showLogo } size={ size } />
      <div className={ styles.typo }><span>wolken</span>kit</div>
      <div className={ styles.suffix }>{ suffix }</div>
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

export default Brand;
