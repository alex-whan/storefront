// State should be a list of all products

// Each product should have a category association, name, description, price, inventory count

// Create an action that will trigger when the active category is changed

// HINT: Multiple reducers can respond to the same actions
// i.e. PRODUCTS and CATEGORIES

// Create a reducer that will filter the products list based on the active category

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
      name: 'nintendo switch',
      category: 'electronics',
      description: 'an instant classic',
      price: '$299',
      inventory: 1,
    },
    {
      name: 'the coolest stapler',
      category: 'office',
      description: 'I believe someone still has it',
      price: '$1',
      inventory: 1,
    },
  ],
  productsToDisplay: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  // console.log('ACTION???', action);

  switch (type) {
    case 'change':
      let targetCategory = payload.name;
      let productsToDisplay = state.products.filter(product => {
        return product.category === targetCategory;
      });
      // console.log('DISPLAY PRODS', productsToDisplay);
      return { ...state, productsToDisplay };
    default:
      return state;
  }
};

//TODO define action creators (functions that give us the ACTION OBJECT)
