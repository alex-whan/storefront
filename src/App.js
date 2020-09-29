import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Storefront/Categories';
import CurrentCategory from './components/Storefront/Current-Category';
import Products from './components/Storefront/Products';

// App component serves as the container for all sub-components of this application

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h2>This is my App</h2>
      </div>
      <CurrentCategory />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;
