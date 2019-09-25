import React, { Component } from 'react';

import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

import './Authorization.scss';

export default class Authorization extends Component {

  state = {
    userName: '',
    errorMessage: ''
  };

  handleFieldChange(value) {
    this.setState(() => ({
      userName: value
    }));
  }

  checkNameValidate() {
    const { userName } = this.state;
    const { chatUsers } = this.props;
    const nameIsAlreadyExist = chatUsers.find(user => user === userName);
    const nameIsWrongSymbols = !userName.match('[a-zA-Zа-яА-Я][^#&<>\"~;$^%{}?]{1,20}$');
    if (nameIsAlreadyExist) {
      return 'Это имя уже занято';
    } else if (nameIsWrongSymbols) {
      return 'Вы ввелие недопустимые символы';
    }
    return null;
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { userName } = this.state;
    const { chatUsers, getAuthorizeUser } = this.props;
    const isInvalid = this.checkNameValidate();
    if (isInvalid) {
      return this.setState(() => ({
        errorMessage: isInvalid
      }));
    }
    getAuthorizeUser(userName);
  }

  renderErrorMessage(errorMessage) {
    return(
      <div className='authorizeForm__error'>
        { errorMessage }
      </div>
    )
  }

  render() {
    const { userName, errorMessage } = this.state;
    return (
      <div className='authorizeForm'>
        <h2>Авторизация</h2>
        <div className='authorizeForm__container'>
          <Input
            value={ userName }
            placeHolder='Введите ваше имя'
            handleChange={ (ev) => this.handleFieldChange(ev.target.value) }
          />
          <Button
            type='submit'
            content='Войти'
            styleType='primary'
            handleChange= { (ev) => this.handleSubmit(ev) }
          />
        </div>
        {
          errorMessage && this.renderErrorMessage(errorMessage)
        }
      </div>
    );
  }
}