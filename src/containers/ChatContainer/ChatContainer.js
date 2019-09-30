import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row, Col, Container } from 'react-bootstrap';

import {
  getAuthorizeUser, setNewMessage, removeUserOnExit, updateViewMessages, updateChatUsers
} from '../../store/chat/actions';

import ChatContent from '../../components/Chat/ChatContent/ChatContent';
import Users from '../../components/Chat/Users/Users';
import Authorization from '../../components/Chat/Authorization/Authorization';

import './ChatContainer.scss';

class ChatContainer extends Component {

  static propTypes = {
    chatUsers: PropTypes.array,
    currentUser: PropTypes.object,
    chatMessages: PropTypes.array,
    messagesCounter: PropTypes.number,
    usersCounter: PropTypes.number,
    getAuthorizeUser: PropTypes.func,
    setNewMessage: PropTypes.func,
    removeUserOnExit: PropTypes.func,
    updateViewMessages: PropTypes.func,
    updateChatUsers: PropTypes.func,
  };

  render() {
    const {
      chatUsers, getAuthorizeUser, currentUser,
      setNewMessage, chatMessages, messagesCounter,
      removeUserOnExit, updateViewMessages, updateChatUsers, usersCounter
    } = this.props;
    return (
      <Row>
        <div className='container'>
            { !_.isEmpty(currentUser) ?
                <Container>
                  <Row className='chatBlock'>
                    <Col lg={9} className='noPadding'>
                      <ChatContent
                        currentUser={ currentUser }
                        chatMessages={ chatMessages }
                        setNewMessage={ setNewMessage }
                        messagesCounter={ messagesCounter }
                        updateViewMessages={ updateViewMessages }
                      />
                    </Col>
                    <Col lg={3} className='chatContainer__users d-none d-lg-block'>
                      <Users
                        chatUsers={ chatUsers }
                        currentUser={ currentUser }
                        removeUserOnExit={ removeUserOnExit }
                        updateChatUsers={ updateChatUsers }
                        usersCounter={ usersCounter }
                      />
                    </Col>
                  </Row>
                </Container>
             :
              <Authorization
                getAuthorizeUser={ getAuthorizeUser }
                chatUsers={ chatUsers }
              />
            }
        </div>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  chatUsers: state.chat.chatUsers,
  currentUser: state.chat.currentUser,
  chatMessages: state.chat.chatMessages,
  messagesCounter: state.chat.messagesCounter,
  usersCounter: state.chat.usersCounter
});

const mapDispatchToProps = {
  getAuthorizeUser,
  setNewMessage,
  removeUserOnExit,
  updateViewMessages,
  updateChatUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);