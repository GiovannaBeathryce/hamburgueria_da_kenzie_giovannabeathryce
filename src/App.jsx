import Header from "./Components/Header";
import ProductsList from "./Components/ProductsContainer";
import CarShopp from "./Components/Car";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");

  const handleApi = () => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div className="App">
      <Header setFilteredProducts={setFilteredProducts} />
      <div className="container">
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
        <CarShopp
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      </div>
    </div>
  );
};

export default App;
