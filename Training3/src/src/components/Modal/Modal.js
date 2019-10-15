import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './stylesheets/modal.css';

export default class Modal extends Component {
  static propTypes = {   
  }
  constructor(){
    super();
    this.state = {
      valueUserName: '',
      valueEmail: '',
    }
  }
  handlerUserName = (event) => {
    this.setState({valueUserName: event.target.value});
  }
  handlerEmail = (event) => {
    this.setState({valueEmail: event.target.value});
  }
  handlerDataModal = (event) => {
    this.setState({dataModal: event.target.value});
  }
  render() {
    const { isVisible, closeModal, modalContent, handlerDataModal } = this.props;    
    return (      
      <div className={isVisible ? `modal-container modal-show` : `modal-container`}>
        {/* On Here you can style inline if you want */}
        <div className="modal-wrapper">
          <div className="modal-header">
            <h3>Modal Header</h3>
            <span className="close-modal-btn" onClick={closeModal}>X</span>
          </div>
          <div className="modal-body">
            <div className="group-form">
              <div className="group-box">
                <label>UserName</label>
                <input 
                  onChange={this.handlerUserName} 
                  value={this.state.valueUserName}
                  type="text" 
                  name="username" 
                  className="txt-username" 
                  />
              </div>
              <div className="group-box">
                <label>Email</label>
                <input 
                  onChange={this.handlerEmail} 
                  value={this.state.valueEmail}
                  type="email" 
                  name="email" 
                  className="txt-email" />
              </div>
              <div className="group-box">
                <label>Data Modal</label>
                <textarea 
                  onChange={handlerDataModal} 
                  value={modalContent}
                  type="email" 
                  name="email" 
                  className="txt-email" />
              </div>
            </div>
            <div className="result">
              <h3>Result</h3>
              <div className="result-line">
                <label>UserName:</label>
                {this.state.valueUserName}
                </div>
              <div className="result-line">
                <label>Email:</label>
                {this.state.valueEmail}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn-cancel" onClick={closeModal}>CANCEL</button>
            <button className="btn-add">SUBMIT </button>
          </div>
        </div>
      </div>
    )
  }
}
