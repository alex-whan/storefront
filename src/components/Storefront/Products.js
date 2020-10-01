import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart';
import { getProducts } from '../../store/products';

const Products = ({
  getProducts,
  addToCart,
  productsToDisplay,
  activeCategory,
}) => {
  useEffect(() => {
    getProducts();
  }, [activeCategory]); // is this the right thing to listen to changing?

  console.log('DISPLAY PRODS IN PRODS', productsToDisplay);

  return (
    <div>
      <h2>PRODUCTS:</h2>
      <ul>
        {productsToDisplay.map(product => {
          if (product.category === activeCategory && product.inventory > 0) {
            return (
              <li key={Math.random()}>
                {product.name}
                <button onClick={() => addToCart(product)}>ADD</button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeCategory: state.categories.activeCategory,
    productsToDisplay: state.products.productsToDisplay,
  };
};

const mapDispatchToProps = { addToCart, getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
