// State should contain a list of categories as well as the active category

// Each category should have a normalized name, display name, and a description

// Create an action that will trigger the reducer to change the active category

// Update the active category in the reducer when this action is dispatched

const initialState = {
  categories: [
    {
      name: 'kitchen',
      displayName: 'kitchen',
      description: 'stuff for the kitchen!',
    },
    {
      name: 'office',
      displayName: 'office',
      description: 'cool paper and stuff!',
    },
    {
      name: 'electronics',
      displayName: 'electronics',
      description: 'electronic stuff!',
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
