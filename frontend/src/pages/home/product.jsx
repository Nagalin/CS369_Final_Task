import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Product = ({id, name, pictureName, price}) => {
 const navigate = useNavigate()

  return (
    <div className="product">
      <img src={`http://localhost:8000/${pictureName}`} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ฿{price}</p>
      </div>
       <button onClick={() => {
          const data = {
            id
          };
         const queryParams = new URLSearchParams(data).toString();
        navigate(`/productDetails?${queryParams}`)
       } }>
        Detail
      </button>
    </div>
  );
};