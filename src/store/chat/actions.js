export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
export const UPDATE_USERS = 'UPDATE_USERS';

export const getAuthorizeUser = userName => ({
  type: AUTHORIZE_USER,
  payload: {
    userName
  }
});

export const setNewMessage = messageParams => ({
  type: SET_NEW_MESSAGE,
  payload: {
    ...messageParams
  }
});

export const removeUserOnExit = currentUser => ({
  type: REMOVE_USER,
  payload: {
    ...currentUser
  }
});

export const updateViewMessages = updatedMessages => ({
  type: UPDATE_MESSAGES,
  payload: {
    updatedMessages
  }
});

export const updateChatUsers = updatedUsers => ({
  type: UPDATE_USERS,
  payload: {
    updatedUsers
  }
});
