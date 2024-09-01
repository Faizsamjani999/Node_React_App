import React from 'react';
import './HomePage.css'; // Ensure this CSS file is properly styled

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Store</h1>
          <p>Discover amazing products with great deals</p>
          <button>Shop Now</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Hero"
          className="hero-image"
        />
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <div className="category-item">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Category 1"
            />
            <h3>Electronics</h3>
          </div>
          <div className="category-item">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Category 2"
            />
            <h3>Fashion</h3>
          </div>
          <div className="category-item">
            <img
              src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Category 3"
            />
            <h3>Home & Furniture</h3>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img
              src="https://images.unsplash.com/photo-1609945686511-189f5c5e12b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Product 1"
            />
            <h3>Smartphone</h3>
            <p>$499</p>
          </div>
          <div className="product-item">
            <img
              src="https://images.unsplash.com/photo-1567016547708-01f3d63e5408?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Product 2"
            />
            <h3>Wristwatch</h3>
            <p>$199</p>
          </div>
          <div className="product-item">
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Product 3"
            />
            <h3>Headphones</h3>
            <p>$99</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and offers.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>
    </div>
  );
};

export default HomePage;
