import React from "react";

const Navbar = props => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Memory Game!</span>
    <span>Guess correctly!</span>
    <span>Your Score: {props.score}</span>
  </nav>
);

export default Navbar;
