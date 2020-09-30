import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Storefront/Categories';
import CurrentCategory from './components/Storefront/Current-Category';
import Products from './components/Storefront/Products';
import SimpleCart from './components/Cart/SimpleCart';

// App component serves as the container for all sub-components of this application

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <SimpleCart />
        <CurrentCategory />
        <Categories />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
