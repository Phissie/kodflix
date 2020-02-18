import React from "react";
import MovieTitle from "./MovieTitle";
import mulan_movie_poster from "./mulan-movie-poster.jpeg";
import titanic_kodflix from "./titanic-hd.jpg";
import pirates from "./pirates.jpg";
import chocolat from "./chocolat-movie-poster.jpg";
import forrest_gump from "./forrest_gump.jpg";
import a_star_is_born from "./a_star_is_born.jpg";
export default function Gallery(props) {
  return (
    <div className="gallery-container">
        <MovieTitle name="Mulan" logo={mulan_movie_poster} />
        <MovieTitle name="Titanic" logo={titanic_kodflix} />
        <MovieTitle name="Pirates of the Carribean" logo={pirates} />
        <MovieTitle name="Chocolat" logo={chocolat} />
        <MovieTitle name="Forrest Gump" logo={forrest_gump} />
        <MovieTitle name="A Star is Born" logo={a_star_is_born} />
    </div>
  );
}
