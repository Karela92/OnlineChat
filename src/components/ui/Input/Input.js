import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.scss'

export default class Input extends Component {

  static propTypes = {
    handleChange: PropTypes.func,
    handleKeyDown: PropTypes.func,
    placeHolder: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    handleChange: () => {},
    handleKeyDown: () => {},
    value: ''
  };

  render() {
    const { handleChange, placeHolder, value, handleKeyDown } = this.props;
    return (
      <input
        onChange={ handleChange }
        type='text'
        value={ value }
        placeholder={ placeHolder }
        onKeyDown={ handleKeyDown }
      />
    );
  }
}