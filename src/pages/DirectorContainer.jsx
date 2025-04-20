import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([]); // State for directors

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch directors");
        }
        return r.json();
      })
      .then(setDirectors) // Set the directors state
      .catch(console.log); // Log errors to console
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to the Director's Directory!</h1>
        <Outlet context={directors} /> {/* Pass directors state to child routes */}
      </main>
    </>
  );
};

export default DirectorContainer;