import React, { Component } from 'react';
import _throttle from 'lodash/throttle';

export default class debounce extends Component {
  // Document
  // https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
  constructor(params) {
    super(params);
    this.handleVeryBigTaskThrottle = _throttle(this.handleVeryBigTask, 1000);
  }

  state = {
    text: '',
  }

  handleVeryBigTask = () => {
    let z = 10;
    for(let i = 0; i < 100000; i++) {
      z += 20;
    }
    console.log(z);
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
    this.handleVeryBigTaskThrottle();
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <div>{text}</div>
        <input value={text} onChange={this.handleChange} />
      </div>
    )
  }
}
