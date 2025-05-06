// src/pages/ProductDetail.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import allProducts from '../data/allProducts'
import { useCart } from '../context/CartContext'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = allProducts.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Product not found.</h2>
        <Link to="/">← Back to catalog</Link>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>
        <p className="rating">⭐ {product.rating}</p>
        <p className="notes">
          <strong>Notes:</strong> {product.notes.join(', ')}
        </p>
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <Link to="/" className="back-link">
          ← Back to catalog
        </Link>
      </div>
    </div>
  )
}
