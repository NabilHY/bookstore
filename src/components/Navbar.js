import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar">
    <span className="Bookstore-CMS">
      Bookstore CMS
    </span>
    <Link className="navlink" to="/">Books</Link>
    <Link className="navlink" to="/categories">Categories</Link>
    <div className="cont">
      <FaUserAlt className="user" />
    </div>
  </nav>
);

export default Navbar;
