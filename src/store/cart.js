const initialState = {
  productsInCart: [],
};

export const addToCart = product => {
  return {
    type: 'ADD',
    payload: product,
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD':
      return { ...state, productsInCart: [...state.productsInCart, payload] };
    default:
      return state;
  }
};
