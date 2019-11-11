/**
 * Create the store with dynamic reducers
 */

import { createStore } from 'redux';
import createReducer from '../reducers';


export default function configureStore(initialState = {}, history) {
  const store = createStore(
    createReducer({}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return { store };
}
