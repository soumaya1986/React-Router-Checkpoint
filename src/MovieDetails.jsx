// MovieDetails.js
import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <div>Movie not found.</div>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe
          title="movie trailer"
          width="560"
          height="315"
          src={movie.trailerLink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
