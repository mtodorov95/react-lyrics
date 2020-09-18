import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <Link className="navbar-brand mb-0 h1 mx-auto" to="/">
        <span>Lyric Finder</span>
      </Link>
    </nav>
  );
}

export default Navbar;
