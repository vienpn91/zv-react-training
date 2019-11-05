import { combineReducers } from 'redux';
import counter from './counter';
import todoabc from './todo';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    counter,
    todoabc, 
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer;
}
