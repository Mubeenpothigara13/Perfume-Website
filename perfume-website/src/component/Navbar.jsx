// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useCart();

  return ( 
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">PerfumeShop</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="auth-link">Login</Link>
          <Link to="/signup" className="auth-link signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
