import "../src/App.scss"
import Header from "./components/header/Header"
import ProductList from "./components/products/ProductList";

import {products,categories} from "./helper/data"

function App() {
  return (
    <div className="App">
     <Header categories={categories} title="Product List" />
     <ProductList products={products} />
    </div>
  );
}

export default App;
