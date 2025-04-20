import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DirectorForm() {
  const [name, setName] = useState(""); // State for director's name
  const [bio, setBio] = useState(""); // State for director's bio
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDirector = { name, bio, movies: [] };

    fetch("http://localhost:4000/directors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDirector),
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to add director");
        }
        return r.json();
      })
      .then((data) => {
        console.log(data);
        navigate(`/directors/${data.id}`); // Redirect to the newly created director's detail page
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to add director. Please try again.");
      });
  };

  return (
    <div>
      <h2>Add New Director</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)} // Update bio state
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  );
}

export default DirectorForm;