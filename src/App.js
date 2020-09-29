import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CurrentCategory from './components/Storefront/Current-Category';

// App component serves as the container for all sub-components of this application

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h2>This is my App</h2>
      </div>
      <CurrentCategory />
      <Footer />
    </>
  );
}

export default App;
