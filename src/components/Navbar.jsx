import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
<header className='navbar-container'>
    <div className='nav-brand'> 
        <Link to="/" > ShopHub </Link>
    </div>

    <nav className='nav-menu'> 
        <Link to="/" className='nav-item'> Home </Link>
        <Link to="/cart" className='nav-item'> Cart (0) </Link>

        <Link to="/login" className='nav-item'> Login </Link>
    </nav>
</header>
  );
};

export default Navbar;