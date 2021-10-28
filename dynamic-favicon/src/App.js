import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
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
