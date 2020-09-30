import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart';

//TODO: Displays a list of products associated with the selected category
// Props is coming up UNDEFINED when clicking the ADD button
// Can we have multiple OnClicks at once?
// productsToDisplay.map() is not a function?

const Products = props => {
  return (
    <div>
      <h2>PRODUCTS:</h2>
      <ul>
        {props.productsToDisplay.map(product => {
          return (
            <li key={Math.random()}>
              {product.name}: {product.inventory}
              <button onClick={() => props.addToCart(product)}>ADD</button>
            </li>
          );
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
