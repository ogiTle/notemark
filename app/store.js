import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';

const store = createStore(rootReducer, applyMiddleware(logger, thunk, reduxPromise));

function logger({ getStore }) {
  return next => action => {
    console.log('dispatch', action);
    return next(action);
  }
}
export default store;
