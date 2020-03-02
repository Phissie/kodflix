import React from "react";
import MovieTitle from "./MovieTitle";
import NotFound from "./../pages/Not-Found/Not-Found";
import { Redirect } from "react-router-dom";

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("/api/movies")
      .then(response => response.json())
      .then(movies => {
        this.setState({ movies });
      });
  }

  render() {
    if (this.state.movies === undefined) {
      return <Redirect to={NotFound} />;
    } else {
      return (
        <div className="gallery-container">
          {this.state.movies.map(movie => (
            <MovieTitle
              key={movie.id}
              id={movie.id}
              name={movie.name}
              logo={movie.logo}
            />
          ))}
        </div>
      );
    }
  }
}
