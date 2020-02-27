import React from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import getMovies from "../data";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {} };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieid;
    let movie = getMovies().find(movie => movie.movieid === movieId);
    this.setState({ movie });
  }

  render() {
    return <h1> {this.state.movie.name} </h1>;
  }
}
