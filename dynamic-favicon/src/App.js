import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateFavicon = this.updateFavicon.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.state = {
      counter: 0,
      pageTitle: '',
      getPageTitle: false

    }
  }

  updateTitle() {
    this.setState({ pageTitle: document.querySelector("title").innerText })
  }

  updateFavicon() {
    console.log(this.state.pageTitle)
    if (this.state.getPageTitle === false) {
      this.updateTitle();
      this.setState({ getPageTitle: true })
    }
    console.log(this.state.pageTitle)
    const favicon = document.querySelector("link[rel~='icon']");
    if (this.state.counter === 0) {
      favicon.href = '/default.ico';
      document.title = this.state.pageTitle
    } else if (this.state.counter === 1) {
      favicon.href = '/1.ico';
      document.title = this.state.pageTitle + ' (1)'
    } else if (this.state.counter === 2) {
      favicon.href = '/2.ico';
      document.title = this.state.pageTitle + ' (2)'
    } else if (this.state.counter === 3) {
      favicon.href = '/3.ico';
      document.title = this.state.pageTitle + ' (3)'
    } else if (this.state.counter === 4) {
      favicon.href = '/4.ico';
      document.title = this.state.pageTitle + ' (4)'
    } else if (this.state.counter === 5) {
      favicon.href = '/5.ico';
      document.title = this.state.pageTitle + ' (5)'
    } else if (this.state.counter > 5) {
      favicon.href = '/5plus.ico';
      document.title = this.state.pageTitle + ' (5+)'
    }

  }
  componentDidMount() {
    this.updateTitle()
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
