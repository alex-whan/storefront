// Load the category and product list from a remote API on page load.

// You will need to use useEffect() to dispatch a load action on the initial page load

// This will need to use thunk as it will be asynchronous

const initialState = {
  categories: [
    {
      name: 'kitchen',
      displayName: 'Kitchen',
      description: 'Stuff for the kitchen!',
    },
    {
      name: 'office',
      displayName: 'Office',
      description: 'Cool paper and stuff!',
    },
    {
      name: 'electronics',
      displayName: 'Electronics',
      description: 'Electronic stuff!',
    },
  ],
  activeCategory: 'kitchen',
};

export const changeActiveCategory = name => {
  return {
    type: 'CATEGORY',
    payload: name,
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY':
      return { ...state, activeCategory: payload.name };
    default:
      return state;
  }
};
