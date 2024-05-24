import React from "react"
import { Product } from "./product.jsx"
import "./Homepage.css"
import useFetch from "../../hooks/useFetch.js"
import { Alert } from "react-bootstrap"

const Homepage = () => {
  const [data, error] = useFetch("/product")

  return (
    <>
      {error ? (
        <Alert variant="danger"> {error} </Alert>
      ) : (
        <div className="shop">
          <div className="shopTitle">
            <h1>Stock Lists</h1>
            <h3>Please Check your Items Below</h3>
            <br />
          </div>

          <div className="products">
            {data.map((product) => (
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                pictureName={product.pictureName}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Homepage
