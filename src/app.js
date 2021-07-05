import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";


const App = (props) => {
  return (
    <>
      <Header />

      <Categories />

      <Products />

      <Footer />
    </>
  );
};
export default App;
