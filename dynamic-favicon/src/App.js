import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      counter: 0

    </div>
  );
  increment() {
    this.setState({ counter: Math.min(10, this.state.counter + 1) }, () => {
      this.updateFavicon()
    });
  }
  decrement() {
    this.setState({ counter: Math.max(0, this.state.counter - 1) }, () => {
      this.updateFavicon()
    });
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.decrement} className="button button-dec">-</button>
        <p className="counter-value">{this.state.counter}</p>
        <button onClick={this.increment} className="button button-inc">+</button>
      </div>
    );
  }
}

export default App;
