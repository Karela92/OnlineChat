import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../store/configureStore';
import ChatContainer from '../containers/ChatContainer/ChatContainer';

import './App.scss';

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