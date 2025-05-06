// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Directly navigate to Payment page after filling the form
    navigate('/payment');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-card">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="addressLine1"
            placeholder="Street Address"
            value={formData.addressLine1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="City, State, ZIP"
            value={formData.addressLine2}
            onChange={handleChange}
            required
          />
          <textarea
            name="notes"
            placeholder="Delivery Notes (Optional)"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="checkout-btn">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
