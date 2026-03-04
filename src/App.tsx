
import './App.css'
import {products} from "./data/productsList.ts";
import ProductComponent from "./components/products-component/product-component.tsx";

function App() {


  return (
    <>

      {products.map((product,index) => <ProductComponent key={index} product={product} />)}

    </>
  )
}

export default App
