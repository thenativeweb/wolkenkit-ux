import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const View = ({ adjust, alignItems, classes, children, justifyContent, style, orientation }) => {
  const viewClassNames = classNames(classes.View, {
    [classes.OrientationCentered]: orientation === 'centered',
    [classes.OrientationHorizontal]: orientation === 'horizontal',
    [classes.OrientationVertical]: orientation === 'vertical',
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.AlignItemsCenter]: alignItems === 'center',
    [classes.JustifyContentCenter]: justifyContent === 'center'
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

export default injectSheet(styles)(View);
