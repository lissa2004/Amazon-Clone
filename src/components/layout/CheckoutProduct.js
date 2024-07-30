import React, {useContext} from "react";
import ShoppingContext from "../shopping/shoppingContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, rating, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkout_product_image" src={image} alt="" />
      <div className="checkout_product_info">
       <div className="checkout_product_title">
       <p>{title}</p>
       </div>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">⭐</span>
            ))}
        </div>
        <div className="checkout_product_price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </div>
      {!hideButton && (
        <button onClick={removeFromBasketHandler}>
          Remove From hideButtonbasket
        </button>
      )}
    </div>
  );
};

export default CheckoutProduct;
