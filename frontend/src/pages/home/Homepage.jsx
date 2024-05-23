import React from 'react'
import { PRODUCTS } from './products.js'
import {Product} from './product.jsx'
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="shop">
    <div className="shopTitle">
      <h1>PedroTech Shop</h1>
    </div>

    <div className="products">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  </div>
  )
}

export default Homepage
