// AKA the ACTIVE CATEGORY

//TODO: State should store active category
// Other components (products, etc) might need to reference this

import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';

const CurrentCategory = props => {
  // console.log('CURRENT CAT:', props);
  return <h2>CURRENT CATEGORY: {props.activeCategory.toString()}</h2>;
};

const mapStateToProps = state => {
  // console.log('STATE??', state.categories.activeCategory);
  return {
    activeCategory: state.categories.activeCategory,
  };
};

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCategory);
