import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';
import { getCategories } from '../../store/categories';

// Load the category and product list from a remote API on page load.

// You will need to use useEffect() to dispatch a load action on the initial page load

// This will need to use thunk as it will be asynchronous

const Categories = ({ getCategories, changeActiveCategory, categories }) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <h2>CATEGORIES:</h2>
      <ul>
        {categories.map(category => {
          return (
            <li
              key={category._id}
              onClick={() => changeActiveCategory(category)}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  };
};

const mapDispatchToProps = { getCategories, changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
