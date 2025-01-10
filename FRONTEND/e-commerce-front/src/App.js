import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./page/FormPage";
import Home from "./page/HomePage";
import Admin from "./page/AdminPage";
import ProductPage from "./page/ProductPage";
import CartPage from "./page/CartPage";
import PaymentPage from "./page/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
