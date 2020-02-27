import React from "react";
import MovieTitle from "./MovieTitle";
import data from "../data";

export default function Gallery() {
  return (
    <div className="gallery-container">
      {data().map(movie => (
        <MovieTitle id={movie.id} name={movie.name} logo={movie.logo} />
      ))}
    </div>
  );
}
