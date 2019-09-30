import React, { Component } from 'react';

import MessageContainer from './MessageContainer/MessageContainer';

import './ChatContent.scss';

export default class ChatContent extends Component {

  componentDidMount() {
    setInterval(() => {
      this.getCheckMessagesUpdates();
    }, 250)
  }

  getCheckMessagesUpdates() {
    const { updateViewMessages, messagesCounter } = this.props;
    const localStorageChatMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (localStorageChatMessages && localStorageChatMessages.length !== messagesCounter) {
      updateViewMessages(localStorageChatMessages);
    }
  }

  render() {
    const { currentUser, setNewMessage, chatMessages } = this.props;
    return (
      <div className='chatContainer'>
        <div className='chatContainer__content'>
          {
            chatMessages.map((message, index) => {
              const isSameUser = currentUser.currentUserName === message.user;
              return(
                <div className='messageContainer' key={ index }>
                  <div className='userContainer'>
                    <div className={ `userContainer__userName ${isSameUser ? 'userContainer__userName--yourSelf' : ''}` }>
                      { message.user } { isSameUser ? <span>(Вы)</span> : null }
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