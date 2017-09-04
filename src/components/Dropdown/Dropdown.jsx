import classNames from 'classnames';
import Icon from '../Icon/Icon.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

class Dropdown extends React.PureComponent {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      isFocused: false
    };
  }

  handleChange (event) {
    this.props.onChange(event.value);
  }

  handleFocus () {
    this.setState({
      isFocused: true
    });
  }

  handleBlur () {
    this.setState({
      isFocused: false
    });
  }

  render () {
    const { emptyLabel, options, size, value } = this.props;

    const dropdownClassNames = classNames(styles.Dropdown, {
      [styles.SizeDefault]: size === 'default',
      [styles.SizeS]: size === 's',
      [styles.Focused]: this.state.isFocused
    });

    return (
      <div className={ dropdownClassNames }>
        <select key='commands' value={ value } onChange={ this.handleChange } onFocus={ this.handleFocus } onBlur={ this.handleBlur }>
          { emptyLabel ? <option value='' key='empty-value'>{ emptyLabel }</option> : null }
          {
            options.map(option => (
              <option
                key={ option.value }
                value={ option.value }
              >
                {option.label}
              </option>
            ))
          }
        </select>
        <Icon key='icon' color='white' className={ styles.CollapseIcon } name='expand' />
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf([ 'default', 's' ])
};

Dropdown.defaultProps = {
  size: 'default'
};

module.exports = Dropdown;
