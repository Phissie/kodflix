import React from "react";
import MovieTitle from "./MovieTitle";
import mulan_movie_poster from "../images/mulan-movie-poster.jpeg";
import titanic_kodflix from "../images/titanic-hd.jpg";
import pirates from "../images/pirates.jpg";
import chocolat from "../images/chocolat-movie-poster.jpg";
import forrest_gump from "../images/forrest_gump.jpg";
import a_star_is_born from "../images/a_star_is_born.jpg";
export default function Gallery(props) {
  return (
    <div className="gallery-container">
      <MovieTitle id="mulan" name="Mulan" logo={mulan_movie_poster} />
      <MovieTitle id="Titanic" name="Titanic" logo={titanic_kodflix} />
      <MovieTitle
        id="Pirates of the Carribean"
        name="Pirates of the Carribean"
        logo={pirates}
      />
      <MovieTitle id="Chocolat" name="Chocolat" logo={chocolat} />
      <MovieTitle id="Forrest Gump" name="Forrest Gump" logo={forrest_gump} />
      <MovieTitle
        id="A Star is Born"
        name="A Star is Born"
        logo={a_star_is_born}
      />
    </div>
  );
}
