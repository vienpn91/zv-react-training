import { combineReducers } from 'redux';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    example: () => ({}),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer;
}
