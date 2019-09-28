import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = (state = {}, action) => {
  // Add to the order in the store
  // Sample feedback state:
  // {
  //   feeling: 4,
  //   understanding: 4,
  //   support: 5,
  //   comments: 'Doing great1'
  // }
  if (action.type === 'SET_FEEDBACK') {
    return {...state, ...action.payload};
  } // end if
  return state;
} // end feedbackReducer

const reduxStore = createStore(
  // using combineReducers in case more are needed later
  combineReducers({
    feedbackReducer
  }),
  // log reduxStore details to console
  applyMiddleware(logger)
); // end reduxStore

ReactDOM.render(
  // make the store available to the entire app
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
); // end render

// registerServiceWorker();
