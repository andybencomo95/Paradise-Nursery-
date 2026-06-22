import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { clearCart } from './CartSlice';
import './App.css';

const LandingPage = () => (
  <section className="landing-page">
    <div className="landing-overlay" />
    <div className="landing-content">
      <p className="landing-kicker">Paradise Nursery</p>
      <h1>Bring nature home with healthy plants.</h1>
      <p className="landing-copy">
        Discover easy-care plants, simple tips, and a calm green space for your home.
      </p>
      <Link to="/products" className="get-started-btn">
        Comenzar
      </Link>
    </div>
  </section>
);

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <p className="cart-total-items">
              Total Items: <strong>{totalQuantity}</strong>
            </p>
            <p className="cart-total-amount">
              Total Amount: <strong>${totalAmount.toFixed(2)}</strong>
            </p>
          </div>

          <div className="cart-items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-actions">
            <button className="clear-cart-btn" onClick={handleClearCart}>
              Vaciar carrito
            </button>
            <button className="checkout-btn" type="button">
              Próximamente
            </button>
            <Link to="/products" className="continue-shopping-btn">
              Continuar comprando
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

function App() {
  const cart = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="brand-link" onClick={() => setIsMenuOpen(false)}>
            <span className="brand-icon">🌿</span>
            <span className="brand-name">Paradise Nursery</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link cart-link" onClick={() => setIsMenuOpen(false)}>
                Cart
                {cart.totalQuantity > 0 && <span className="cart-badge">{cart.totalQuantity}</span>}
              </Link>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Paradise Nursery. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
