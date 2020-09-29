// AKA the ACTIVE CATEGORY

//TODO: State should store active category
// Other components (products, etc) might need to reference this

import React from 'react';
import { connect } from 'react-redux';

const CurrentCategory = props => {
  return <h2>CURRENT CATEGORY: {props.activeCategory}</h2>;
};

const mapStateToProps = state => {
  return {
    activeCategory: state.products.activeCategory,
  };
};

// const mapDispatchToProps

export default connect(mapStateToProps)(CurrentCategory);
