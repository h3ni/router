import "./style.css";
import React from "react";
import { useParams } from "react-router-dom";
const Moviedesc = ({ movies }) => {
  const { movieId } = useParams();
  const movieDetails = movies.find((movie) => movie.id == movieId);
  return (
    <div className="movie">
      <img src={movieDetails.posterUrl} alt="image film" />
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.description}</p>
      <p>Rating : {movieDetails.rating}</p>
      <iframe
        width="560"
        height="315"
        src={movieDetails.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Moviedesc;
