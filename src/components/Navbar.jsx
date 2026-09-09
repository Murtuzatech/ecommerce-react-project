
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { totalItemsCount } = useCart();

  <Link to="/cart" className="nav-item"> Cart ({totalItemsCount}) </Link>

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          ShopHub
        </Link>

        <div className="nav-links">
          <Link to="/home" className="nav-item">
            Home
          </Link>

          <Link to="/cart" className="nav-item">
            Cart ({totalItemsCount})
          </Link>

          <Link to="/" className="nav-item">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
