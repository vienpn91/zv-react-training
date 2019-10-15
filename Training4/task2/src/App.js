import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataItems: [],
      error: '',
      isLoaded: false,
    }
  }
  countriesAPI = () => {
    console.log('hi hi ')
  }
  componentDidMount(){
    this.countriesAPI();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"  style={{width: '160px' }}/>
          <div>

          </div>
        </header>
      </div>
    );
  }
};

