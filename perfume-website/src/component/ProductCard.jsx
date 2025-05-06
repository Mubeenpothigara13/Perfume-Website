// components/ProductCard.jsx
import { Link } from 'react-router-dom';

function ProductCard({ id, name, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <Link to={`/products/${id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
