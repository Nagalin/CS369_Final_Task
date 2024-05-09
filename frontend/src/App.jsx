import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Addproducts from "./pages/addProducts/AddProducts";
import ProductDetails from "./pages/productDetails/ProductDetails";

import { Routes, Route } from "react-router-dom";
import Proctected from "./components/Proctected";
import { AuthContextProvider } from "./contexts/AuthContext";
const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDetails" element={<ProductDetails />} />

        <Route element={<Proctected />}>
          <Route path="/addProducts" element={<Addproducts />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
