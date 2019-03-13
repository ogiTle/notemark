import { combineReducers } from 'redux';
import itemReducer from './items';
import emptyReducer from './empty';

const rootReducer = combineReducers({
  itemReducer,
  emptyReducer
});

export default rootReducer;
