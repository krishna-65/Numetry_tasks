import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 border rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold">{product.price}</p>
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
