import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Books</Link>
            <Link to='/categories'>Categories</Link>
        </nav>
    )
}

export default Navbar;