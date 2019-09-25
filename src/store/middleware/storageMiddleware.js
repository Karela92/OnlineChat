import { AUTHORIZE_USER, SET_NEW_MESSAGE, REMOVE_USER } from '../chat/actions';

export const storageMiddleware = ({ getState }) => next => action => {
  if (action.type === AUTHORIZE_USER) {
    localStorage.setItem('chatUsers', JSON.stringify([...getState().chat.chatUsers, action.payload.userName]));
    sessionStorage.setItem('currentUser', JSON.stringify({ currentUserName: action.payload.userName, userId: getState().chat.chatUsers.length + 1 }));
  }
  if (action.type === REMOVE_USER) {
    localStorage.setItem('chatUsers',
      JSON.stringify([...getState().chat.chatUsers.slice(0, action.payload.userId - 1), ...getState().chat.chatUsers.slice(action.payload.userId)])
    );
  }
  if (action.type === SET_NEW_MESSAGE) {
    localStorage.setItem('chatMessages', JSON.stringify([...getState().chat.chatMessages, action.payload]));
  }
  next(action);
};