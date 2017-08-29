import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const View = ({ adjust, alignItems, children, justifyContent, style, orientation }) => {
  const viewClassNames = classNames(styles.View, {
    [styles.OrientationCentered]: orientation === 'centered',
    [styles.OrientationHorizontal]: orientation === 'horizontal',
    [styles.OrientationVertical]: orientation === 'vertical',
    [styles.AdjustFlex]: adjust === 'flex',
    [styles.AdjustAuto]: adjust === 'auto',
    [styles.AlignItemsCenter]: alignItems === 'center',
    [styles.JustifyContentCenter]: justifyContent === 'center'
  });

  return (
    <div className={ viewClassNames } style={ style }>
      { children }
    </div>
  );
};

View.propTypes = {
  adjust: PropTypes.oneOf([ 'auto', 'flex' ]),
  alignItems: PropTypes.oneOf([ 'center' ]),
  justifyContent: PropTypes.oneOf([ 'center' ]),
  orientation: PropTypes.oneOf([ 'horizontal', 'vertical', 'centered' ])
};

export default View;
