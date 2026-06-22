import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalAmount = () => {
    return cart.items.reduce((total, item) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      return total + cost * item.quantity;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-total">
        Total Amount: <strong>${calculateTotalAmount().toFixed(2)}</strong>
      </div>
      <div className="cart-items">
        {cart.items.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-cost">Unit Cost: {item.cost}</p>
              <p className="cart-item-subtotal">
                Subtotal: ${(parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className="cart-item-actions">
              <button className="quantity-btn" onClick={() => handleDecrement(item)}>−</button>
              <span className="quantity-display">{item.quantity}</span>
              <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
              <button className="delete-btn" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-actions">
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
