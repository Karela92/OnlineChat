import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss'

export default class Button extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    styleType: PropTypes.string,
    handleChange: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    styleType: 'primary',
    disabled: false
  };

  render() {
    const { content, styleType, handleChange, type, disabled } = this.props;
    return (
      <button
        className={ styleType }
        onClick={ handleChange }
        type={ type }
        disabled={ disabled }
      >
        { content }
      </button>
    );
  }
}