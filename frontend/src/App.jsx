import React from 'react'
import {Container} from 'react-bootstrap'
import './App.css'
import Home from './pages/home/Homepage'
import Login from './pages/login/Login'
import Addproducts from './pages/addProducts/AddProducts'
import ProductDetails from './pages/productDetails/ProductDetails'

import {Routes,Route} from 'react-router-dom'
import Proctected from './components/Proctected'
const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />

    <Route element={<Proctected/>}>

    <Route path="/addProducts" element={<Addproducts />} />
    <Route path="/productDetails" element={<ProductDetails />} />
    </Route>
  </Routes>
  )
}

export default App