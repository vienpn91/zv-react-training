import React from 'react';
import logo from './logo.svg';
import './App.css';
import HackerNew  from './components/HackerNews';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <HackerNew />
    </div>
  );
}

export default App;
