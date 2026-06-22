import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './CartSlice';
import { plantsArray } from './plantsData';
import CartItem from './CartItem';
import './App.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    if (isPlantInCart(plant.name)) return;
    dispatch(addItem(plant));
  };

  const handleRemoveFromCart = (plantName) => {
    dispatch(removeItem(plantName));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <a href="/" onClick={(e) => handleHomeClick(e)}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div className="nav-right">
          <div>
            <a href="#" onClick={(e) => handlePlantsClick(e)} className="nav-link">Plants</a>
          </div>
          <div>
            <a href="#" onClick={(e) => handleCartClick(e)} className="cart-icon-link">
              <span className="cart-icon-text">Cart</span>
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
              )}
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div className="product-category-group" key={index}>
              <h2 className="product-category-title">{category.category}</h2>
              <div className="products-grid">
                {category.plants.map((plant, plantIndex) => {
                  const inCart = isPlantInCart(plant.name);
                  return (
                    <div className="product-card" key={plantIndex}>
                      <img src={plant.image} alt={plant.name} className="product-image" />
                      <h3 className="product-name">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-cost">{plant.cost}</p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => inCart ? handleRemoveFromCart(plant.name) : handleAddToCart(plant)}
                      >
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
