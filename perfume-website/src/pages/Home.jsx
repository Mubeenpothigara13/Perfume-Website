// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to PerfumeShop</h1>
          <p>Discover luxurious scents curated for elegance and allure.</p>
          <Link to="/products">
            <button className="shop-now">Shop Now</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/img/p1.jpg" alt="Perfume Banner" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Perfumes</h2>
        <div className="product-grid">
          {[
            { img: '/img/p2.jpg', name: 'Rose Mist', price: '$45.00' },
            { img: '/img/p3.jpg', name: 'Jasmine Bloom', price: '$52.00' },
            { img: '/img/p4.jpg', name: 'Ocean Breeze', price: '$48.00' },
          ].map((product, i) => (
            <div className="product-card" key={i}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About PerfumeShop</h2>
        <p>
          At PerfumeShop, we offer handpicked fragrances from top brands.
          Our perfumes are made with love, quality, and the promise of
          unforgettable scent experiences.
        </p>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Absolutely stunning fragrance! I feel confident and elegant.”</p>
            <span>– Ananya</span>
          </div>
          <div className="testimonial-card">
            <p>“Best online store for premium perfumes. Fast delivery too!”</p>
            <span>– Rohan</span>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get exclusive offers and scent updates.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

  

    </div>
  );
}

export default Home;
