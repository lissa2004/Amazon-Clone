import React, { useContext } from 'react';
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css"
import { useHistory} from "react-router-dom"
import ShoppingContext from "../shopping/shoppingContext";

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox " /> This order contain a gift
            </small>
          </>
        )}

        decimalScale ={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button>
      Subtotal
    </div>
  );
};

export default Subtotal;
