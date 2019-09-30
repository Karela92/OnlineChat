import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'
import moment from 'moment';

import Button from '../../../ui/Button/Button';

import './MessageContainer.scss';

export default class MessageContainer extends Component {

  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = {
      messageText: ''
    }
  };

  componentDidMount() {
    this.contentEditable.current.focus();
  }

  handleChange(value) {
    this.setState(() => ({
      messageText: value
    }))
  }

  handleSubmit() {
    const { currentUser, setNewMessage } = this.props;
    const params = {
      createdMessageTime: moment().format('HH:MM'),
      user: currentUser.currentUserName,
      messageText: this.contentEditable.current.textContent
    };
    setNewMessage(params);
    this.setState(() => ({
      messageText: ''
    }));
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.handleSubmit(this.state.messageText);
    }
  }

  render() {
    const { messageText } = this.state;
    return (
      <div className='chatContainer__messageBlock'>
        <ContentEditable
          innerRef={this.contentEditable}
          html={messageText}
          disabled={false}
          onKeyUp={ ev => this.handleKeyDown(ev)}
          onChange={ ev => this.handleChange(ev.target.value)}
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