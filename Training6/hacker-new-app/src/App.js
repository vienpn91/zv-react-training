
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import HackerNew  from './containers/HackerNews';

const { store } = createStore();



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header>      
        <HackerNew />
      </div>
    </Provider>
  );
}

export default App;
