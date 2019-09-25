import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'
import moment from 'moment';

import Button from '../../../ui/Button/Button';

import './MessageContainer.scss';

export default class MessageContainer extends Component {

  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = {
      messageText: ''
    }
  };

  handleChange(value) {
    this.setState(() => ({
      messageText: value
    }))
  }

  handleSubmit(messageText) {
    const { currentUser, setNewMessage } = this.props;
    const params = {
      createdMessageTime: moment().format('HH:MM'),
      user: currentUser.currentUserName,
      messageText
    };
    setNewMessage(params);
    this.setState(() => ({
      messageText: ''
    }))
  }

  render() {
    const { messageText } = this.state;
    return (
      <div className='chatContainer__messageBlock'>
        <ContentEditable
          innerRef={this.contentEditable}
          html={messageText}
          disabled={false}
          onChange={(ev) => this.handleChange(ev.target.value)}
          className='messageText'
        />
        <Button
          disabled={ messageText ? false : true }
          type='submit'
          content='Отправить'
          styleType='primary'
          handleChange= { () => this.handleSubmit(messageText) }
        />
      </div>
    );
  }
}