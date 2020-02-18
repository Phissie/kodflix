import React from "react";
export default function MovieTitle(props) {
  return (
    <div className="poster">
      <img
        className="posterImage"
        src={props.logo}
        alt={`${props.name} logo`}
      />
      <div className="overlay">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}
