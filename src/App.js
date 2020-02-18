import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieTitle from "./MovieTitle";
import Gallery from "./Gallery";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
      
          <Route path="/" component={Gallery} />
          <Route path="/details" component={Details} />
          {/* <Route exact path='/' component={Gallery} /> */}
          {/* <Route exact path='/details' component={Details} /> */}
        </div>
      </Router>
    );
  }
}
export default App;
