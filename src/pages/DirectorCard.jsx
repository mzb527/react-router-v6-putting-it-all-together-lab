import React from "react";
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams(); // Get the director ID from the route
  const directors = useOutletContext(); // Access the directors' data from parent context
  const director = directors.find((d) => d.id === parseInt(id)); // Find the matching director by ID

  if (!director) {
    return <h2>Director not found.</h2>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link> {/* Link to specific movie */}
          </li>
        ))}
      </ul>
      <Link to={`movies/new`}>Add New Movie</Link> {/* Link to add a new movie */}
      <Outlet context={director} /> {/* Render child routes (e.g., MovieForm, MovieCard) */}
    </div>
  );
}

export default DirectorCard;