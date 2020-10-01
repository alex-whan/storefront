/* eslint-disable no-case-declarations */

import axios from 'axios';

/* eslint-disable indent */

// When adding/removing/updating items in the cart, the action/reducer will need to update the server
// Perform the appropriate POST, PUT, or DELETE action via API call (using thunk in an async action) on each of these actions as performed by the users

const initialState = {
  productsInCart: [],
};

export const addToCart = product => {
  return async function (dispatch) {
    // await axios.put(
    //   `https://api-js401.herokuapp.com/api/v1/product/${product._id}`,
    //   { ...(product.inventory - 1) }
    // );

    dispatch({
      type: 'ADD_CART',
      payload: product,
    });
  };
};

export const removeFromCart = product => {
  return async function (dispatch) {
    // await axios.put(
    //   `https://api-js401.herokuapp.com/api/v1/product/${product._id}`,
    //   { ...(product.inventory + 1) }
    // );

    dispatch({
      type: 'REMOVE_CART',
      payload: product,
    });
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_CART':
      return { ...state, productsInCart: [...state.productsInCart, payload] };

    case 'REMOVE_CART':
      let filteredCart = state.productsInCart.filter(
        product => product !== payload
      );

      return { ...state, productsInCart: filteredCart };

    default:
      return state;
  }
};
