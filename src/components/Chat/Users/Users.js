import React, { Component } from 'react';

import './Users.scss';

export default class Users extends Component {

  componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload)
  }

  onUnload() {
    const { currentUser, removeUserOnExit } = this.props;
    removeUserOnExit(currentUser);
  }

  render() {
    const { chatUsers } = this.props;
    console.log(chatUsers,'chatUsers');
    return (
      <div className='chatContainer__users'>
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