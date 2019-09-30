import {AUTHORIZE_USER, SET_NEW_MESSAGE, REMOVE_USER, UPDATE_MESSAGES, UPDATE_USERS } from './actions';

const initialState = {
  chatUsers:  localStorage.getItem('chatUsers') ? JSON.parse(localStorage.getItem('chatUsers')) : [],
  currentUser: sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : {},
  chatMessages:  localStorage.getItem('chatMessages') ? JSON.parse(localStorage.getItem('chatMessages')) : [],
  messagesCounter: 0,
  usersCounter: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_USER:
      return {
        ...state,
        chatUsers: [...state.chatUsers, action.payload.userName],
        currentUser: {
          currentUserName: action.payload.userName,
          userId: state.chatUsers.length + 1,
          usersCounter: state.usersCounter.length + 1
        }
      };
    case SET_NEW_MESSAGE:
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload],
        messagesCounter: state.messagesCounter + 1
      };
    case UPDATE_MESSAGES:
      return {
        ...state,
        chatMessages: [...action.payload.updatedMessages],
        messagesCounter: action.payload.updatedMessages.length
      };
    case UPDATE_USERS:
      return {
        ...state,
        chatUsers: [...action.payload.updatedUsers],
        usersCounter: action.payload.updatedUsers.length
      };
    case REMOVE_USER:
      return {
        chatUsers: [...state.chatUsers.slice(0, action.payload.userId - 1), ...state.chatUsers.slice(action.payload.userId)]
      };
    default:
      return state;
  }
};
