
import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';
import {rootReducer} from './redux/rootReducer'
import './index.scss';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
     <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
