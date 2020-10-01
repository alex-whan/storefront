import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart';

// Displays a short list (title only) of products in the cart
// This should be present at all times
// When a user clicks the “add to cart” button add the item to their cart
// In the <SimpleCart/> component, show a running list of the items in the cart (just the titles)

const SimpleCart = ({ productsInCart, removeFromCart }) => {
  // console.log('PRODS IN CART????', props);
  // console.log('PRODS IN CART?', productsInCart);
  return (
    <div>
      <h2>SimpleCart</h2>
      <ul>
        {productsInCart.map(product => {
          return (
            <li key={Math.random()}>
              {product.name}

              <button onClick={() => removeFromCart(product)}>
                REMOVE FROM CART
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productsInCart: state.cart.productsInCart,
  };
};

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
