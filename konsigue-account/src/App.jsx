import React, { Component } from "react";
import logo from "./assets/img/konsigue_logo.png";
import "./App.css";
import AppsMenu from "./principal/principal.jsx";
import LoginComponent from "./principal/components/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" />
          <Route path="/apps" component={AppsMenu} />
          <Route path="/login" component={LoginComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
