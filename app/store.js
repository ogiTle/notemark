import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(logger));

function logger({ getStore }) {
  return next => action => {
    console.log('dispatch', action);
    return next(action);
  }
}
export default store;
