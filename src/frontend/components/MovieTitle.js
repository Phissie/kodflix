import React from "react";
import { Link } from "react-router-dom";

export default function MovieTitle(props) {
  return (
    <>
      <div className="posterContainer">
        <Link to={"/" + props.id}>
          <img
            className="posterImage"
            src={require(`../common/images/${props.id}.jpg`)}
            alt={props.id}
          />
          alt={`${props.name} logo`}
          />
        </Link>
        <div className="overlay">
          <h1>{props.name}</h1>
        </div>
      </div>
    </>
  );
}
