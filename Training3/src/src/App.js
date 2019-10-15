import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      isVisible: false,
    }
  }
  openModal = () => {
    this.setState({
      isVisible: true,
    });
  }
  closeModal = () => {
    this.setState({
      isVisible: false,
    });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header>      
        <div>
          <button className="open-modal" onClick={this.openModal}>Open Modal </button>
          <Modal 
            isVisible={this.state.isVisible} 
            close={this.closeModal}
           />
        </div>
      </div>
    );
  } 
}

export default App;
