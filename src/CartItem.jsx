import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!Number.isNaN(value) && value >= 0) {
      if (value === 0) {
        dispatch(removeItem(item.id));
      } else {
        dispatch(updateQuantity({ id: item.id, quantity: value }));
      }
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-category">{item.category}</p>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button className="quantity-btn decrease" onClick={handleDecrease} aria-label="Decrease quantity">
            −
          </button>
          <input
            type="number"
            min="0"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
            aria-label="Quantity"
          />
          <button className="quantity-btn increase" onClick={handleIncrease} aria-label="Increase quantity">
            +
          </button>
        </div>

        <div className="cart-item-total">
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>

        <button className="remove-btn" onClick={handleRemove} aria-label="Remove item">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
