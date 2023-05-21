import React from "react";
import "./Product.css";

export const Product = ({title,price,image,rating}) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map(()=>{
            return(<p>⭐</p>)
          })}
          
        </div>
      </div>
      <img
        src={image}
        alt="productImage"
      />
      <button>Add to Basket</button>
    </div>
  );
};
