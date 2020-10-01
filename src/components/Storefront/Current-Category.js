import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';

const CurrentCategory = ({ activeCategory }) => {
  return <h2>CURRENT CATEGORY: {activeCategory}</h2>;
};

const mapStateToProps = state => {
  return {
    activeCategory: state.categories.activeCategory,
  };
};

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCategory);
