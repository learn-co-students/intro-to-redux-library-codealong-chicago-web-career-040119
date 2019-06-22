// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Provider allows us to access Redux Store and/or dispatch actions from any component
ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>, document.getElementById('root'));
