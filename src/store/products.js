/* eslint-disable indent */
/* eslint-disable no-case-declarations */
// State should be a list of all products

// Each product should have a category association, name, description, price, inventory count

// Create an action that will trigger when the active category is changed

// HINT: Multiple reducers can respond to the same actions
// i.e. PRODUCTS and CATEGORIES

// Create a reducer that will filter the products list based on the active category

// UNEXPECTED LEXICAL DECLARATION IN CASE BLOCK?? WHAT IS THIS ERROR?

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

export const reduceStock = name => {
  return {
    type: 'REDUCE',
    payload: name,
  };
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY':
      let productsToDisplay = state.products.filter(product => {
        return product.category === payload.name;
      });
      return { ...state, productsToDisplay };

    case 'REDUCE':
      console.log('PAYLOAD>>>>', payload);
      let productToModify = state.products.map(product => {
        if (product.name === payload.name) {
          product.inventory--;
          // Won't let me do it without using '--'?
        }
        console.log('PRODUCT???', product);
        return product;
      });

      return {
        ...state,
        products: productToModify,
      };

    default:
      return state;
  }
};
