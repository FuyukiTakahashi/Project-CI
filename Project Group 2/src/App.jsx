
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./components/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Details from "./pages/Details";


const App = () => {
  return(
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/detail" element={<Details/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;