import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1), 0
  );

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-message">🛒 Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary below items */}
          <div className="cart-summary bottom">
            <h2>Order Summary</h2>
            <p>Total Items: {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="checkout-btn" onClick={() => navigate('/Checkout')}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
