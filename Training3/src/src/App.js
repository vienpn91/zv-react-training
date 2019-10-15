import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isVisible: false,
      dataModal: 'Change Text Modal Here',
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
  handlerDataModal = (event) => {
    this.setState({
      dataModal: event.target.value,
    });
  }
  componentDidMount(){
    document.getElementById('openModal').addEventListener('click', this.openModal);
  }
  componentWillUnmount() {
   
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <span>{this.state.dataModal}</span>     
          <img src={logo} className="App-logo" alt="logo" />          
        </header>      
        <div>
          <button id="openModal" className="open-modal">Open Modal Dom Event </button>
          <button id="openModals" className="open-modal" onClick={this.openModal}>Open Modal </button>
          <Modal 
            isVisible={this.state.isVisible} 
            closeModal={this.closeModal}
            modalContent={this.state.dataModal}
            handlerDataModal={this.handlerDataModal}
           />
        </div>
      </div>
    );
  } 
}

export default App;
