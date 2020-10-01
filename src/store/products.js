/* eslint-disable indent */
/* eslint-disable no-case-declarations */

// Load the category and product list from a remote API on page load.

// You will need to use useEffect() to dispatch a load action on the initial page load

// This will need to use thunk as it will be asynchronous

const initialState = {
  products: [
    {
      name: 'egg cooker',
      category: 'kitchen',
      description: 'it cooks eggs!',
      price: '$15',
      inventory: 10,
    },
    {
      name: 'the baconator',
      category: 'kitchen',
      description: 'bacon!!',
      price: '$24',
      inventory: 5,
    },
    {
      name: 'cast iron wok',
      category: 'kitchen',
      description: 'welcome to the hard wok cafe',
      price: '$65',
      inventory: 8,
    },
    {
      name: 'nintendo switch',
      category: 'electronics',
      description: 'an instant classic',
      price: '$299',
      inventory: 5,
    },
    {
      name: 'computer monitor',
      category: 'electronics',
      description: 'more monitors = more professional',
      price: '$99',
      inventory: 12,
    },
    {
      name: 'cool stapler',
      category: 'office',
      description: 'I believe someone still has it',
      price: '$1',
      inventory: 5,
    },
    {
      name: 'paperweight',
      category: 'office',
      description: 'that paper won\t weight itself!',
      price: '$10',
      inventory: 5,
    },
  ],
  productsToDisplay: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY':
      let productsToDisplay = state.products.filter(product => {
        return product.category === payload.name;
      });
      return { ...state, productsToDisplay };

    case 'ADD_CART':
      let addedProducts = state.products.map(product => {
        if (product.inventory > 0 && product.name === payload.name) {
          product.inventory--;
          // Won't let me do it without using '--'?
        }
        return product;
      });
      return {
        ...state,
        products: addedProducts,
      };

    case 'REMOVE_CART':
      let removedProducts = state.products.map(product => {
        if (product.name === payload.name) {
          product.inventory++;
        }
        return product;
      });
      return {
        ...state,
        products: removedProducts,
      };

    default:
      return state;
  }
};
