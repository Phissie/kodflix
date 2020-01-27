import React, { Component } from "react";
import mulan_movie_poster from "./mulan-movie-poster.jpeg";
import titanic_kodflix from "./titanic-kodflix.jpg";
import pirates from "./pirates.jpg";
import chocolat_movie_poster from "./chocolat-movie-poster.jpg";
import forrest_gump from "./forrest_gump.jpg";
import a_star_is_born from "./a_star_is_born.jpg";
import "./App.css";
import MovieTitle from "./MovieTitle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <MovieTitle name="Mulan" logo={mulan_movie_poster} />
          <MovieTitle name="Titanic" logo={titanic_kodflix} />
          <MovieTitle name="Pirates of the Carribean" logo={pirates} />
        </div>
        <div className="container">
          <MovieTitle name="Chocolat" logo={chocolat_movie_poster} />
          <MovieTitle name="Forrest Gump" logo={forrest_gump} />
          <MovieTitle name="A Star is Born" logo={a_star_is_born} />
        </div>
      </div>
    );
  }
}
export default App;
