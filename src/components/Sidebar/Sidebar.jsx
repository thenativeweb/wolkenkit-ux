import React from 'react';
import styles from './styles.css';

const Sidebar = props => (
  <div className={ styles.Sidebar }>
    { props.children }
  </div>
);

export default Sidebar;
