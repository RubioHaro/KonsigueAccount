import React, { Component } from 'react';
import logo from './assets/img/konsigue_logo.png';
import './App.css';
import AppsMenu from './principal/principal.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">konsigue Account</h1>
        </header>
        <div className="container">
          <AppsMenu></AppsMenu>
        </div>
      </div>
    );
  }
}

export default App;
