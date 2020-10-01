import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';

// Load the category and product list from a remote API on page load.

// You will need to use useEffect() to dispatch a load action on the initial page load

// This will need to use thunk as it will be asynchronous

const Categories = props => {
  return (
    <div>
      <h2>CATEGORIES:</h2>
      <ul>
        {props.categories.map(category => {
          return (
            <li
              key={category.displayName}
              onClick={() => props.changeActiveCategory(category)}
            >
              {category.displayName}
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

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
