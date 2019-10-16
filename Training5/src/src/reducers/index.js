import { combineReducers } from 'redux';
import counter from './counter';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    counter,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer;
}
