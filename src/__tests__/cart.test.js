import categoriesReducer, { changeActiveCategory } from '../store/categories';
import productsReducer from '../store/products';
import cartReducer, { addToCart } from '../store/cart';
import { combineReducers } from 'redux';

describe('Categories tests', () => {
  it('should have correct initial state', () => {
    const state = cartReducer(undefined, {});
    expect(state.productsInCart.length).toBe(0);
  });

  it('should add items to the cart', () => {
    const item = {
      name: 'the baconator',
      category: 'kitchen',
      inventory: 5,
    };
    const state = cartReducer(undefined, addToCart(item));
    expect(state.productsInCart.length).toBe(1);
    expect(state.productsInCart[0].name).toBe('the baconator');
  });

  it.skip('should lower item inventory when added to cart', () => {
    const item = {
      name: 'the baconator',
      category: 'kitchen',
      inventory: 5,
    };
    const state = combineReducers({ cartReducer, productsReducer });

    expect(cartReducer(undefined, addToCart(item))).toEqual('hi');
    // expect(state.productsInCart.length).toBe(1);
    // expect(state.productsInCart[0].name).toBe('the baconator');
    // expect(state.productsInCart[0].inventory).toBe(4);
  });

  it.skip('should add multiple items to the cart', () => {
    const item1 = {
      name: 'the baconator',
      category: 'kitchen',
      inventory: 5,
    };
    const item2 = {
      name: 'nintendo switch',
      category: 'electronics',
      inventory: 5,
    };

    const state = cartReducer(undefined, addToCart(item1));
    const state2 = cartReducer(undefined, addToCart(item2));

    expect(state.productsInCart.length).toBe(1);
    expect(state.productsInCart[0].name).toBe('the baconator');
  });
});
