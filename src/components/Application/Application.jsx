import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';
import View from '../View/View.jsx';

const Application = ({ children, style, orientation }) => (
  <View className={ styles.Application } orientation={ orientation } style={ style }>
    { children }
  </View>
);

Application.propTypes = {
  orientation: PropTypes.oneOf([ 'horizontal', 'vertical', 'centered' ])
};

Application.defaultProps = {
  orientation: 'horizontal'
};

export default Application;
