import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';

//TODO: Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

const Categories = props => {
  // console.log('MAP???', categoriesToMap);

  return (
    <div>
      <h2>My Categories component.</h2>
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
    categories: state.categories.categories, // maybe change this
  };
};

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
