import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './stylesheets/modal.css';

export default class Modal extends Component {
  static propTypes = {   
  }

  render() {
    const { isVisible, close } = this.props;
    console.log(close)
    return (      
      <div className={isVisible ? `modal-container modal-show` : `modal-container`}>
        {/* On Here you can style inline if you want */}
        <div className="modal-wrapper">
          <div className="modal-header">
            <h3>Modal Header</h3>
            <span className="close-modal-btn" onClick={close}>X</span>
          </div>
          <div className="modal-body">
            <p>
                {this.props.children}
            </p>
            tao dang test
          </div>
          <div className="modal-footer">
            <button className="btn-cancel" onClick={close}>CANCEL</button>
            <button className="btn-continue">CONTINUE</button>
          </div>
        </div>
      </div>
    )
  }
}
