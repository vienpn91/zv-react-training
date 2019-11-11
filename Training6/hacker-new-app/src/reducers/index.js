import { combineReducers } from 'redux';
import hackernewroot from './hackernews';
import hackerdetailsroot from './hackerdetails'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    hackernewroot,
    hackerdetailsroot,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer;
}
