import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './components/Cards';
import FilterButtons from './components/Filterbuttons';
import CartProvider from './contexts/CartContext'; 
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios.get('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
      .then(response => {
        if (response.data && response.data.categories) {
          const allProducts = response.data.categories.reduce((acc, category) => {
            const categoryProducts = category.category_products.map(product => ({
              ...product,
              category: category.category_name
            }));
            return acc.concat(categoryProducts);
          }, []);
          setProducts(allProducts);
          setFilteredProducts(allProducts);
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      })
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  const filterProducts = (category) => {
    setFilter(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <CartProvider>
      <div className="App p-4">
        <h1 className="text-3xl font-bold mb-4">Cloth Website</h1>
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded absolute right-10" onClick={() => setShowCart(!showCart)}>
          {showCart ? 'Back to Products' : 'View Cart'}
        </button>
        {showCart ? (
          <Cart />
        ) : (
          <>
            <FilterButtons filter={filter} filterProducts={filterProducts} />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>Loading products...</p>
              )}
            </div>
          </>
        )}
      </div>
    </CartProvider>
  );
};

export default App;
