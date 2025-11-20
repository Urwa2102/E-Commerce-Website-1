import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import men_banner from "./Components/Assets/banner_mens.png";
import woman from "./Components/Assets/banner_women.png";
import kids from "./Components/Assets/banner_kids.png";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={woman} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:productId" element={<ProductDisplay />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
