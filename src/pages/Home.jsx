import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Movie Directory</h1>
      <p>Your go-to place for director and movie information!</p>
      <Link to="/directors">View All Directors</Link>
      <Link to="/about">Learn More About This App</Link>
    </div>
  );
}

export default Home;