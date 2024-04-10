import "./App.css";
import { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/layout/home";
import Products from "./components/layout/Products";
import Header from "./components/layout/Header";
import ProductsDetails from "./components/layout/ProductsDetails";
import LogIn from "./components/layout/LogIn";
import ShoppingContext from "./components/shopping/shoppingContext";
import { auth } from "./firebase";
import NotFound from "./components/layout/NotFound";
import Checkout from "./components/layout/Checkout";
import Payment from "./components/layout/Payment.js";



const promise = loadStripe(
  "pk_test_51OmD6lDqA54xyzpohuHe5JIQbXFeeyrFnfJnUQkXDf3r6BcMX0yPrO88Tyl3VwAPhUot9J4LouxWZrnRUN3zuRZi00WVeCzX2p"
);
const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        setUser({ user: authUser });
      } else {
        setUser();
      }
    });
  }, [setUser]);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Products" exact>
            <Products />
          </Route>
          <Route path="/Products/:id">
            <ProductsDetails />
          </Route>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
