import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";


function App() {


  return (
    <Routes>
      <Route path="/" element={<ProductList/>}/>


    </Routes>

  )
}

export default App
