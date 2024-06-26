import React from "react"
import "./App.css"
import Home from "./pages/home/Homepage"
import Login from "./pages/login/Login"
import Addproducts from "./pages/addProducts/AddProducts"
import ProductDetails from "./pages/productDetails/ProductDetails"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import PrivateRoutes from "./components/PrivateRoutes"
import { AuthContextProvider } from "./contexts/AuthContext"

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/add-products" element={<Addproducts />} />
          </Route>
        </Route>

      </Routes>
    </AuthContextProvider>
  )
}

export default App
