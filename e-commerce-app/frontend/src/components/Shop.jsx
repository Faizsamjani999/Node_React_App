import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Shop.css'; // Add appropriate styles in this CSS file

const Shop = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9999/api/product/GetProduct');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <div className="product-grid">
        {products && products.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.img || 'https://via.placeholder.com/500'} alt={product.pname} className="product-image" />
            <h3>{product.pname}</h3>
            <h5>{product.brandname}</h5>
            <p>{product.des}</p>
            <span>${product.price}</span>
            <button onClick={() => navigate(`/product/${product._id}`)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
