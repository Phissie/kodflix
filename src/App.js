import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Details from "./pages/Details";
import NotFound from "./pages/Not-Found/Not-Found";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/notfound" component={NotFound} />
            <Route exact path="/:movieId" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
