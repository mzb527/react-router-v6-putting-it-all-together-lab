import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function DirectorList() {
  const { directors } = useOutletContext(); // Access directors data from the parent context

  if (!directors || directors.length === 0) {
    return <p>No directors found. Add a new director!</p>;
  }

  return (
    <div>
      <h2>Director List</h2>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            <Link to={`/directors/${director.id}`}>{director.name}</Link> {/* Link to director details */}
          </li>
        ))}
      </ul>
      <Link to="/directors/new">Add New Director</Link> {/* Link to add a new director */}
    </div>
  );
}

export default DirectorList;