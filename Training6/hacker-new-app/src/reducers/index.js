import { combineReducers } from 'redux';
import hackerDetail123 from './hackerdetails';
import hackerNews123 from './hackernews';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    hackerDetail123,
    hackerNews123,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer;
}
