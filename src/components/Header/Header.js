import React from 'react';
import { connect } from 'react-redux';

// Add a “Cart” indicator to the header, like this: Cart (0)

const Header = ({ productsInCart }) => {
  return (
    <div>
      <h1>Virtual Store</h1>
      <h2>Cart: ({productsInCart.length})</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productsInCart: state.cart.productsInCart,
  };
};

export default connect(mapStateToProps)(Header);
