import React from "react";
import "./Details.css";
import { Link, Redirect } from "react-router-dom";
// import getMovies from "../data";
import Loading from "../../components/Loading/Loading";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {} };
  }

  componentDidMount() {
    fetch("/api/movies").then(response =>
      response
        .json()
        .then(movies => {
          console.log(movies);
          this.setState({ movies });
          let movieId = this.props.match.params.movieId;
          let movie = movies.find(movie => movie.id === movieId);
          this.setState({ movie });
        })
        .catch(error => console.log(error))
    );
  }

  render() {
    let movie = this.state.movie;
    if (movie) {
      return movie.id ? <DetailContent movie={movie} /> : <Loading />;
    } else {
      return <Redirect to="not-found" />;
    }
  }
}

function DetailContent({ movie }) {
  let url = require(`../../common/images/${movie.id}.jpg`);
  return (
    <div className="details">
      {" "}
      <Link to="/">
        <div className="navbutton-container">
          {" "}
          <button className="navbutton">
            <h3 className="buttontext"> Return Home </h3>
          </button>
        </div>
      </Link>
      <h1> {movie.name}</h1>
      <h2 className="write_up">{movie.synopsis}</h2>
      <a href={movie.link} target="_blank" rel="noopener noreferrer">
        <img src={url} className="Picture" alt={movie.name} />
      </a>
    </div>
  );
}
