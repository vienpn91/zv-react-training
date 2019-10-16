import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    acc: 1,
  }

  handleChange = (e) => {
    this.setState({
      acc: parseInt(e.target.value, 10),
    })
  }

  render() {
    const { acc } = this.state;
    const { count, increase, decrease, reset } = this.props;
    return (
      <div>
        <div>{count}</div>
        <input value={acc} onChange={this.handleChange} />
        <button onClick={() => increase(acc)}>+</button>
        <button onClick={() => decrease(acc)}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }
}
