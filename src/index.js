import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main.jsx';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import updateCalculator from './reducers.js';

const store = createStore(updateCalculator);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
