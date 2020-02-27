import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Details from "./pages/Details";
import NotFound from "./pages/Not-Found/Not-Found";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route component={NotFound} />
            <Route exact path="/:movieid" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
