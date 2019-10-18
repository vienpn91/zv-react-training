import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import './App.css';
import Counter from './pages/Counter';
import Todo from './containers/Todo';

const { store } = createStore();

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
