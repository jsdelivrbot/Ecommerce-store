import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App/App'

import './reset.css'
import manageStore from './reducers/index'

const store = createStore(manageStore);

export default store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
