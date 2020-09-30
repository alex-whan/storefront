import React from 'react';
import { connect } from 'react-redux';
import products from '../../store/products';

// Displays a short list (title only) of products in the cart
// This should be present at all times
// When a user clicks the “add to cart” button add the item to their cart
// In the <SimpleCart/> component, show a running list of the items in the cart (just the titles)

const SimpleCart = ({ productsInCart }) => {
  // console.log('PRODS IN CART????', props);
  // console.log('PRODS IN CART?', productsInCart);
  return (
    <div>
      <h2>CART: ({productsInCart.length})</h2>
      <ul>
        {productsInCart.map(product => {
          return <li key={product.name}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('STATE???', state.products.products);
  return {
    productsInCart: state.cart.productsInCart,
  };
};

export default connect(mapStateToProps)(SimpleCart);
