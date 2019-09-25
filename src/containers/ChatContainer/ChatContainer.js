import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuthorizeUser, setNewMessage, removeUserOnExit, updateViewMessages } from '../../store/chat/actions';

import ChatContent from '../../components/Chat/ChatContent/ChatContent';
import Users from '../../components/Chat/Users/Users';
import Authorization from '../../components/Chat/Authorization/Authorization';

import './ChatContainer.scss';

class ChatContainer extends Component {

  render() {
    const {
      chatUsers, getAuthorizeUser, currentUser,
      setNewMessage, chatMessages, messagesCounter,
      removeUserOnExit, updateViewMessages
    } = this.props;
    return (
      <div className='mainContent'>
        { currentUser ?
          <div className='chatBlock'>
            <ChatContent
              currentUser={ currentUser }
              chatMessages={ chatMessages }
              setNewMessage={ setNewMessage }
              messagesCounter={ messagesCounter }
              updateViewMessages={ updateViewMessages }
            />
            <Users
              chatUsers={ chatUsers }
              currentUser={ currentUser }
              removeUserOnExit={ removeUserOnExit }
            />
          </div> :
          <Authorization
            getAuthorizeUser={ getAuthorizeUser }
            chatUsers={ chatUsers }
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatUsers: state.chat.chatUsers,
  currentUser: state.chat.currentUser,
  chatMessages: state.chat.chatMessages,
  messagesCounter: state.chat.messagesCounter
});

const mapDispatchToProps = {
  getAuthorizeUser,
  setNewMessage,
  removeUserOnExit,
  updateViewMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);