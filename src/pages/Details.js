import React from "react";
import { Link, Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import getMovies from "../data";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {} };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getMovies().find(movie => movie.id === movieId);
    this.setState({ movie });
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to="/notfound" />;
    } else {
      return (
        <div>
          {" "}
          <h1> {this.state.movie.name}</h1>
      <h2>{this.state.movie.synopsis}</h2>
          <img src={this.state.movie.logo}/>
        </div>
      );
    }
  }
}
