import React, { useContext } from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  //const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ฿{price}</p>
      </div>
       <button className="addToCartBttn">
        Detail
      </button>
    </div>
  );
};