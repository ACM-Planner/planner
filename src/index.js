import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/App';
import reducers from './reducers';
import './index.css';

// Initial global state
const INITIAL_STATE = {}

// See: https://github.com/zalmoxisus/redux-devtools-extension
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const logger = createLogger();
const enhancer = compose(applyMiddleware(thunk, logger), devTools);

// Setup store with reducers, initial state and middlewares
const store = createStore(reducers, INITIAL_STATE, enhancer);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
