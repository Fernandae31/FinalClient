import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FigureCard from './FigureCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the API
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <h1>Figures</h1>
      <div className="product-list">
        {products.map((product) => (
          <FigureCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;