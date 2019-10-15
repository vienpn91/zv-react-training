import React, { Component } from 'react';
import _debounce from 'lodash/debounce';


export default class debounce extends Component {
  constructor(params) {
    super(params);
    this.handleVeryBigTaskDebounced = _debounce(this.handleVeryBigTask, 1000);
    this.handleVeryBigTaskDebounced = _debounce(this.handleVeryBigTask, 1000);
  }

  state = {
    text: '',
    texts: '',
  }

  handleVeryBigTask = () => {
    let z = 10;
    for(let i = 0; i < 1000000000; i++) {
      z += 20;
    }
    console.log(z);
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
    this.handleVeryBigTaskDebounced();
  }
  handleChanges = (e) => {
    this.setState({
      texts: e.target.value,
    });
    this.handleVeryBigTaskDebounced();
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <div>{text}</div>
        <input value={text} onChange={this.handleChange} />
        <input value={text} onChange={this.handleChanges} />
      </div>
    )
  }
}
