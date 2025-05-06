import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [promo, setPromo] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [form, setForm] = useState({ upi: '', card: { number: '', expiry: '', cvv: '', name: '' } });
  const [error, setError] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? 10 : 0;
  const delivery = subtotal > 0 ? 4.99 : 0;
  const total = subtotal - discount + delivery;

const handlePayment = () => {
  if (!selected) return setError('Please select a payment method.');

  if (selected.toLowerCase() === 'card' && (
    !form.card.number || !form.card.expiry || !form.card.cvv || !form.card.name
  )) {
    return setError('Please fill in all card details.');
  }

  if (selected.toLowerCase() === 'upi' && !form.upi) {
    return setError('Please enter a valid UPI ID.');
  }

  setError('');

  // 🚀 Trigger UPI app (on mobile)
  if (selected.toLowerCase() === 'upi') {
    const upiUrl = `upi://pay?pa=${form.upi}&pn=PerfumeShop&am=${total.toFixed(2)}&cu=INR`;
    window.location.replace(upiUrl); // This replaces the page with UPI intent
    return;
  }

  // 🧾 For card or COD — simulate checkout
  setTimeout(() => {
    setCartItems([]);
    navigate('/thank-you');
  }, 1500);
};

  

  const applyPromo = () => {
    if (promo.toLowerCase() === 'save10') {
      setPromoApplied(true);
      setError('');
    } else {
      setError('Invalid promo code');
    }
  };

  return (
    <div className="payment-container">
      <div className="summary-box">
        <h2>Order Summary</h2>
        <div className="summary-line"><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="summary-line"><span>Delivery:</span><span>${delivery.toFixed(2)}</span></div>
        {promoApplied && <div className="summary-line"><span>Promo Discount:</span><span>-$10.00</span></div>}
        <div className="summary-total"><strong>Total:</strong><strong>${total.toFixed(2)}</strong></div>

        <div className="promo-box">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
          <button onClick={applyPromo}>Apply</button>
        </div>

        <h3>Payment Method</h3>
        <div className="method-section">
          <label>
            <input type="radio" name="method" value="UPI" onChange={(e) => setSelected(e.target.value)} /> 📱 UPI
          </label>
          {selected === 'UPI' && (
            <input
              className="input-detail"
              type="text"
              placeholder="Enter UPI ID"
              value={form.upi}
              onChange={(e) => setForm({ ...form, upi: e.target.value })}
            />
          )}
        </div>

        <div className="method-section">
          <label>
            <input type="radio" name="method" value="Card" onChange={(e) => setSelected(e.target.value)} /> 💳 Credit/Debit Card
          </label>
          {selected === 'Card' && (
            <div className="card-form">
              <input type="text" placeholder="Card Number" onChange={(e) => setForm({ ...form, card: { ...form.card, number: e.target.value } })} />
              <input type="text" placeholder="Expiry (MM/YY)" onChange={(e) => setForm({ ...form, card: { ...form.card, expiry: e.target.value } })} />
              <input type="text" placeholder="CVV" onChange={(e) => setForm({ ...form, card: { ...form.card, cvv: e.target.value } })} />
              <input type="text" placeholder="Cardholder Name" onChange={(e) => setForm({ ...form, card: { ...form.card, name: e.target.value } })} />
            </div>
          )}
        </div> 

        <div className="method-section">
          <label>
            <input type="radio" name="method" value="COD" onChange={(e) => setSelected(e.target.value)} /> 💵 Cash on Delivery
          </label>
        </div>

        {error && <p className="error-msg">{error}</p>}
        <button className="proceed-btn" onClick={handlePayment}>Proceed to Pay</button>
      </div>
    </div>
  );
}

export default Payment;