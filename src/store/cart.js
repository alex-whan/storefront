const initialState = {
  productsInCart: [],
};

export const addToCart = name => {
  return {
    type: 'ADD',
    payload: name,
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
