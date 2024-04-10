import React, { useContext } from "react";
import "./product.css";
import ShoppingContext from "../shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const { addToBasket } = useContext(ShoppingContext);

  const addToBasketHandler = () => {
    addToBasket({ id, image, title, rating, price });
  };

  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
      </div>
      <div className="product_rating">
        {Array(rating)
        .fill()
        .map((_, i) => (
        <p key={i}>🌟</p>
        ))}
      </div>
      <div className="product_price">
        <p><small>$</small><strong>{price}</strong></p>
      </div>
      <div className="product_button" onClick={addToBasketHandler}>
        Add to Cart
      </div>
    </div>
  );
};

export default Product;
