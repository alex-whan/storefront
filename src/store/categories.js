/* eslint-disable indent */
// Load the category and product list from a remote API on page load.

// You will need to use useEffect() to dispatch a load action on the initial page load

// This will need to use thunk as it will be asynchronous

// categories: [
//   {
//     name: 'food',
//     displayName: 'Food',
//     description: 'Stuff for the kitchen!',
//   },
//   {
//     name: 'office',
//     displayName: 'Office',
//     description: 'Cool paper and stuff!',
//   },
//   {
//     name: 'electronics',
//     displayName: 'Electronics',
//     description: 'Electronic stuff!',
//   },
// ],

import axios from 'axios';
const url = process.env.REACT_APP_API;

const initialState = {
  categories: [],
  activeCategory: '',
};

// const initialState = {
//   categories: [],
//   activeCategory: 'kitchen',
// };

export const changeActiveCategory = name => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: name,
  };
};

// https://api-js401.herokuapp.com/api/v1/categories

export const getCategories = () => {
  return async function (dispatch) {
    const response = await axios.get(
      `https://api-js401.herokuapp.com/api/v1/categories`
    );

    dispatch({
      type: 'UPDATE_CATEGORIES',
      payload: response.data.results,
    });
  };
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      return { ...state, activeCategory: payload.name };

    case 'UPDATE_CATEGORIES':
      return { ...state, categories: payload };

    default:
      return state;
  }
};
