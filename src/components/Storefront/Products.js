import React from 'react';
import { connect } from 'react-redux';

//TODO: Displays a list of products associated with the selected category

const Products = props => {
  // console.log('PROPS???', props);
  return (
    <div>
      <h2>A list of all my cool products:</h2>
      <ul>
        {props.productsToDisplay.map(product => {
          return <li key={product.name}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('STATE???', state.products.products);
  return {
    products: state.products.products,
    productsToDisplay: state.products.productsToDisplay,
  };
};

export default connect(mapStateToProps)(Products);
