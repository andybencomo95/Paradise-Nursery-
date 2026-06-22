import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import { plants } from './plantsData';

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState(() => new Set());

  const groupedPlants = useMemo(() => {
    return plants.reduce((groups, plant) => {
      if (!groups[plant.category]) {
        groups[plant.category] = [];
      }
      groups[plant.category].push(plant);
      return groups;
    }, {});
  }, []);

  const handleAddToCart = (plant) => {
    if (addedItems.has(plant.id)) return;
    dispatch(addItem(plant));
    setAddedItems((current) => new Set(current).add(plant.id));
  };

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Our Plants</h2>
      {Object.entries(groupedPlants).map(([category, categoryPlants]) => (
        <section className="product-category-group" key={category}>
          <h3 className="product-category-title">{category}</h3>
          <div className="products-grid">
            {categoryPlants.map((plant) => {
              const isAdded = addedItems.has(plant.id);
              return (
                <div key={plant.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                      loading="lazy"
                    />
                    <span className="product-category">{plant.category}</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${plant.price.toFixed(2)}</span>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
