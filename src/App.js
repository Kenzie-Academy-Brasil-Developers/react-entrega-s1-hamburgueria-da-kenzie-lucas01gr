import "./App.css";
import Cart from "./cart/indexCart";
import Header from "./header/indexHeader";
import ProductsList from "./productsList/indexProductsList";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function showProducts(input) {
    const filtered = products.filter((e) =>
      e.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  function handleClick(id) {
    const result = products.find((item) => {
      return item.id === id;
    });
    setCurrentSale([...currentSale, result]);
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div>
      <div>
        <Header showProducts={showProducts} />
        <div className="containerListaEcarrinho">
          {filteredProducts.length > 0 ? (
            <ProductsList
              productsList={filteredProducts}
              handleClick={handleClick}
            />
          ) : (
            <ProductsList productsList={products} handleClick={handleClick} />
          )}

          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </div>
      </div>
    </div>
  );
}

export default App;
