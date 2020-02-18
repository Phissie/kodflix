import React, { Component } from "react";
import "./App.css";
import Gallery from "./Gallery";
import Details from "./Details";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Gallery} />
          <Route exact path="/:details" component={Details} />
        </div>
      </Router>
    );
  }
}
export default App;
