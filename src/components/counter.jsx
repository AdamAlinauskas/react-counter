import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  state = { value: this.props.initialValue };

  // handleIncrement = () => {
  //   let newState = { value: this.state.value + 1 };
  //   this.setState(newState);
  // };

  // handleDecrement = () => {
  //   let newState = { value: this.state.value - 1 };
  //   this.setState(newState);
  // };

  changeCounterBy = num => {
    let newState = { value: this.state.value + num };
    this.setState(newState); //calls render
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeCounterBy(-10)}>-10</button>
        <button onClick={() => this.changeCounterBy(-5)}>-5</button>
        <button onClick={() => this.changeCounterBy(-1)}>-1</button>
        &nbsp;
        {this.state.value}
        &nbsp;
        <button onClick={() => this.changeCounterBy(1)}>+1</button>
        <button onClick={() => this.changeCounterBy(5)}>+5</button>
        <button onClick={() => this.changeCounterBy(10)}>+10</button>
      </div>
    );
  }
}

export default Counter;
