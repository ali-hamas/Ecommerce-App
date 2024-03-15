import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header name="Ecomerce" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/men" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/women"
            element={<ShopCategory category="women" />}
          ></Route>
          <Route
            path="/jewelry"
            element={<ShopCategory category="jewelry" />}
          ></Route>
          <Route
            path="/electronics"
            element={<ShopCategory category="electronics" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":/productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
