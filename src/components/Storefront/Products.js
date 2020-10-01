import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart';

const Products = props => {
  return (
    <div>
      <h2>PRODUCTS:</h2>
      <ul>
        {props.productsToDisplay.map(product => {
          if (product.inventory > 0) {
            return (
              <li key={Math.random()}>
                {product.name}: {product.inventory}
                <button onClick={() => props.addToCart(product)}>ADD</button>
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
    products: state.products.products,
    productsToDisplay: state.products.productsToDisplay,
  };
};

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
