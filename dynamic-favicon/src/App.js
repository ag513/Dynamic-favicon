import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateFavicon = this.updateFavicon.bind(this);
    this.state = {
      counter: 0

    }
  }

  updateFavicon() {
    const favicon = document.querySelector("link[rel~='icon']");
    if (this.state.counter === 0) {
      favicon.href = '/default.ico';
    } else if (this.state.counter === 1) {
      favicon.href = '/1.ico';
    } else if (this.state.counter === 2) {
      favicon.href = '/2.ico';
    } else if (this.state.counter === 3) {
      favicon.href = '/3.ico';
    } else if (this.state.counter === 4) {
      favicon.href = '/4.ico';
    } else if (this.state.counter === 5) {
      favicon.href = '/5.ico';
    } else if (this.state.counter > 5) {
      favicon.href = '/5plus.ico';
    }

  }

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
