/* eslint-disable indent */
// Load the category and product list from a remote API on page load.

// You will need to use useEffect() to dispatch a load action on the initial page load

// This will need to use thunk as it will be asynchronous

import axios from 'axios';
const REACT_APP_API = process.env.REACT_APP_API;

// const initialState = {
//   categories: [
//     {
//       name: 'kitchen',
//       displayName: 'Kitchen',
//       description: 'Stuff for the kitchen!',
//     },
//     {
//       name: 'office',
//       displayName: 'Office',
//       description: 'Cool paper and stuff!',
//     },
//     {
//       name: 'electronics',
//       displayName: 'Electronics',
//       description: 'Electronic stuff!',
//     },
//   ],
//   activeCategory: 'kitchen',
// };

const initialState = {
  categories: [],
  activeCategory: 'kitchen',
};

export const changeActiveCategory = name => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: name,
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    const response = await axios.get(
      'https://api-js401.herokuapp.com/api/v1/categories'
    );

    console.log('RES?????', response.data.results);

    dispatch({
      type: 'UPDATE_CATEGORIES',
      payload: response.data.results,
    });
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      return { ...state, activeCategory: payload.name };

    case 'UPDATE_CATEGORIES':
      return { ...state, categories: payload };

    default:
      return state;
  }
};
