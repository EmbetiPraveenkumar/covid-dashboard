import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">COVID Dashboard</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
