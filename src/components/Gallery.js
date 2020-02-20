import React from "react";
import MovieTitle from "./MovieTitle";
import mulan_movie_poster from "../images/mulan-movie-poster.jpeg";
import titanic_kodflix from "../images/titanic-hd.jpg";
import pirates from "../images/pirates.jpg";
import chocolat from "../images/chocolat-movie-poster.jpg";
import forrest_gump from "../images/forrest_gump.jpg";
import a_star_is_born from "../images/a_star_is_born.jpg";
import data from "../data.js";
export default function Gallery() {
  return (
    <div className="gallery-container">
      {data().map(movie => (
        <MovieTitle id={movie.id} name={movie.name} logo={movie.logo} />
      ))}
    </div>
  );
}
