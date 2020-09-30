/* eslint-disable indent */
const initialState = {
  productsInCart: [],
};

export const addToCart = product => {
  return {
    type: 'ADD_CART',
    payload: product,
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_CART':
      return { ...state, productsInCart: [...state.productsInCart, payload] };
    default:
      return state;
  }
};
