const initialState = {
  productsInCart: [],
};

export const addToCart = name => {
  return {
    type: 'CART',
    payload: name,
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CART':
      return { ...state, productsInCart: payload };
    default:
      return state;
  }
};
