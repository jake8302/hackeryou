import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Hello World!
          </p>
          <a
            className="App-link"
            href="https://www.themoviedb.org/settings/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API KEY
          </a>
        </header>
      </div>
    );
  }
}

export default App;
