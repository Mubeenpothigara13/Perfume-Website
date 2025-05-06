import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Important import
import './Footer.css';

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">

        <div className="footer-section about">
      {/* Logo image */}
      <img
        src="/img/p4.jpg"
        alt="PerfumeShop Logo"
        className="footer-logo"
      />
      <h3>PerfumeShop</h3>
      <p>Your destination for luxury and designer fragrances at the best prices.</p>
    </div>

          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4>Contact Us</h4>
            <p>Email: support@perfume-shop.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: Mumbai, India</p>
          </div>

          <div className="footer-section social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PerfumeShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
