import React from "react";
import { List } from "reactstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, index }) => {
  return (
    <div className="movie" key={index}>
      <Link to={`/movie-details/${movie.id}`}>
        <img src={movie.posterUrl} alt="poster movie" />
        <h1>{movie.title}</h1>
      </Link>
      <p>{movie.description}</p>
      <p>{movie.rating}</p>
    </div>
  );
};

export default MovieCard;
