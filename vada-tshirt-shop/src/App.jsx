import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Cloud Dreamer Tee',
    price: 29.99,
    image: 'https://via.placeholder.com/300x350/f5c2e3/ffffff?text=Cloud+Dreamer',
    colors: ['#89CFF0', '#F5C2E3']
  },
  {
    id: 2,
    name: 'Pastel Sky Tee',
    price: 34.99,
    image: 'https://via.placeholder.com/300x350/89CFF0/ffffff?text=Pastel+Sky',
    colors: ['#89CFF0', '#F5C2E3']
  },
  {
    id: 3,
    name: 'Cotton Candy Tee',
    price: 32.99,
    image: 'https://via.placeholder.com/300x350/F5C2E3/ffffff?text=Cotton+Candy',
    colors: ['#89CFF0', '#F5C2E3']
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">VADA</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#custom">Customize</a>
          <a href="#about">About</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Custom T-Shirts That Feel Like a Dream</h1>
          <p>Create your perfect tee with our cloud-inspired designs</p>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="clouds">
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
        </div>
      </section>

      <section className="featured" id="shop">
        <h2>Featured Collection</h2>
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="customize" id="custom">
        <div className="customize-content">
          <h2>Design Your Own</h2>
          <p>Create a unique t-shirt that matches your style</p>
          <button className="cta-button">Start Designing</button>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>VADA</h3>
            <p>Custom t-shirts made with love</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#custom">Customize</a>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: hello@vada.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VADA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
