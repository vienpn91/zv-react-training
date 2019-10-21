import { combineReducers } from 'redux';
import hackerDetails from './HackerDetails';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    hackerDetails,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer;
}
