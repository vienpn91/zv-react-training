import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import Counter from './pages/Counter';

const { store } = createStore();

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
