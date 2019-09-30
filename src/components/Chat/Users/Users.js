import React, { Component } from 'react';

import './Users.scss';

export default class Users extends Component {

  componentDidMount() {
    const { currentUser, removeUserOnExit } = this.props;
    window.addEventListener('beforeunload', (event) => {
      removeUserOnExit(currentUser);
    });
    setInterval(() => {
      this.getCheckUsersUpdates();
    }, 250)
  }

  getCheckUsersUpdates() {
    const { updateChatUsers, usersCounter } = this.props;
    const localStorageChatUsers = JSON.parse(localStorage.getItem('chatUsers'));
    if (localStorageChatUsers && localStorageChatUsers.length !== usersCounter) {
      updateChatUsers(localStorageChatUsers);
    }
  }

  render() {
    const { chatUsers } = this.props;
    return (
      <div>
        В чате сейчас находятся:
        {
          chatUsers.map((user, index) => {
            return(
              <div
                className='userBlock'
                key={ index }
              >
                { user }
              </div>
            )
          })
        }
      </div>
    );
  }
}