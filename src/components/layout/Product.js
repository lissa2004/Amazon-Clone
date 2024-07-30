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
      <img src={image} alt={title} />
      <div className="product_info">
        <p>{title}</p>
      </div>
      <div className="product-rating">
        {Array(rating).fill().map((_, i) => (
          <span key={i} role="img" aria-label="star">⭐</span>
        ))}
      </div>
      <div className="product_price">
        <span><small>$</small><strong>{price}</strong></span>
      </div>
      <div className="product_button" onClick={addToBasketHandler}>
        Add to Cart
      </div>
    </div>
  );
};

export default Product;

