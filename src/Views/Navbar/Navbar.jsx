import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
        <li>
          <Link to="/about">Sobre la App</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
