import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store/configureStore';
import ChatContainer from '../containers/ChatContainer/ChatContainer';

import './App.scss';

store.subscribe(() => console.log('hi') );

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <ChatContainer />
        </div>
      </Provider>
    );
  }
}