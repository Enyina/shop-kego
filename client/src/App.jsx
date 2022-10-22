import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import ProductList from "./pages/ProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/product/:id" element={<Product />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/products/:category" element={<ProductList />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Register />} />

          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
