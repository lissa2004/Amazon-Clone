import React, { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: 'null' };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const getBasketTotal = (basket) => {
   basket.reduce((amount, item) => item.price + amount, 0);
  };

  const addToBasket = async (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  const emptyBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  const removeFromBasket = (item) => {
    dispatch ({type: "REMOVE_FROM_BASKET", payload: item});
  };

  const setUser = (user) => {
    console.log("User payload", user);
    dispatch ({
      type:"SET_USER",
      payload: user, 
    });
  };

  const total = getBasketTotal(state.basket); 

  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        total: total,
        getBasketTotal: getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
        emptyBasket
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
