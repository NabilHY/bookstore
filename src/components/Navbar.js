import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <span className="Bookstore-CMS">
      Bookstore CMS
    </span>
    <Link class="navlink" to="/">Books</Link>
    <Link class="navlink" to="/categories">Categories</Link>
    <div className="Oval">
      <div className="Mask" />
    </div>
  </nav>
);

export default Navbar;
