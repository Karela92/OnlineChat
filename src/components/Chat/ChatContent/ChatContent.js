import React, { Component } from 'react';

import MessageContainer from './MessageContainer/MessageContainer';

import './ChatContent.scss';

export default class ChatContent extends Component {

  componentDidMount() {
    setInterval(() => {
      this.getCheckMessagesUpdates();
    }, 1000)
  }

  getCheckMessagesUpdates() {
    const { updateViewMessages, messagesCounter } = this.props;
    if (JSON.parse(localStorage.getItem('chatMessages')) && JSON.parse(localStorage.getItem('chatMessages')).length !== messagesCounter) {
      console.log(JSON.parse(localStorage.getItem('chatMessages')),123);
      updateViewMessages(JSON.parse(localStorage.getItem('chatMessages')));
    }
  }

  render() {
    const { currentUser, setNewMessage, chatMessages } = this.props;
    return (
      <div className='chatContainer__content'>
        <div className='chatContainer'>
          {
            chatMessages.map((message, index) => {
              return(
                <div className='messageContainer' key={ index }>
                  <div className='userContainer'>
                    <div className='userContainer__userName'>
                      { message.user }
                    </div>
                    <div className='userContainer__text'>{ message.messageText }</div>
                  </div>
                  <div className='timeContainer'>
                    { message.createdMessageTime }
                  </div>
                </div>
              )
            })
          }
        </div>
        <MessageContainer
          currentUser={ currentUser }
          setNewMessage={ setNewMessage }
        />
      </div>
    );
  }
}