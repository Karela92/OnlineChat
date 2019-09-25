import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.scss'

export default class Input extends Component {

  static propTypes = {
    handleChange: PropTypes.func,
    placeHolder: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    handleChange: () => {},
    value: ''
  };

  render() {
    const { handleChange, placeHolder, value } = this.props;
    return (
      <input
        onChange={ handleChange }
        type='text'
        value={ value }
        placeholder={ placeHolder }
      />
    );
  }
}