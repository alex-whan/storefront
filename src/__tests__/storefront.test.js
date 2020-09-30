import categoriesReducer, { changeActiveCategory } from '../store/categories';
import productsReducer from '../store/products';

describe('Categories tests', () => {
  it('should have correct initial state', () => {
    const state = categoriesReducer(undefined, {});
    expect(state.activeCategory).toBe('kitchen');
    expect(state.categories[0].name).toBe('kitchen');
    expect(state.categories[1].name).toBe('office');
    expect(state.categories[2].name).toBe('electronics');
  });

  it('should modify the active category', () => {
    const state = categoriesReducer(
      undefined,
      changeActiveCategory({ name: 'electronics' })
    );
    expect(state.activeCategory).toBe('electronics');
  });
});

describe('Products tests', () => {
  it('should have correct initial state', () => {
    const state = productsReducer(undefined, []);
    expect(state.productsToDisplay.length).toBe(0);
    expect(state.products[0].name).toBe('egg cooker');
    expect(state.products[1].name).toBe('the baconator');
    expect(state.products[2].name).toBe('cast iron wok');
    expect(state.products[3].name).toBe('nintendo switch');
  });

  it.skip('should modify displayed products', () => {
    // const state = productsReducer('electronics', []);

    const stateOne = categoriesReducer(
      undefined,
      changeActiveCategory({ name: 'electronics' })
    );
    const state = productsReducer(undefined, []);
    // console.log('STATE CATEGORY?????', state.activeCategory);
    console.log('STATE?????', state);
    console.log('PRODUCTS TO DISPLAY?????', state.productsToDisplay);
    expect(state.activeCategory).toBe([]);
  });
});
