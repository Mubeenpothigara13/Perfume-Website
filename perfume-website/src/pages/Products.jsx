// src/pages/Products.jsx
import React, { useState } from 'react';
import './Products.css';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

// Simulated long product list
const allProducts = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `Perfume ${i + 1}`,
  price: (Math.random() * 50 + 30).toFixed(2),
  image: `/img/p${(i % 5) + 1}.jpg`,
  category: ['Floral', 'Fresh', 'Sweet', 'Woody'][i % 4],
  rating: (Math.random() * 2 + 3).toFixed(1),
  notes: ['Note1', 'Note2', 'Note3']
}));

const uniqueCategories = ['All', ...new Set(allProducts.map(p => p.category))];
const PRODUCTS_PER_PAGE = 20;

export default function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  // Filter by search & category
  const filteredProducts = allProducts.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="products-page">
      <h1 className="products-title">Explore Our Perfumes</h1>

      {/* Search + Filter */}
      <div className="products-filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          {uniqueCategories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div
              className="wishlist-icon"
              onClick={() => toggleWishlist(product.id)}
            >
              {wishlist.includes(product.id) ? '❤️' : '🤍'}
            </div>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="badge">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <div className="rating">⭐ {product.rating}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button
                className="quick-view"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
