import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from 'react-router-dom';
import ShoppingContext from "../shopping/shoppingContext";
import "./header.css";
import {auth} from "../../firebase";





const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
const handelAuthentication = () => {
  if(user){
     auth.signOut();
  }
};

  return (
    <header className="header">
      <Link to="/">
        <img
          className="logo-img"
          src="https://th.bing.com/th/id/R.1a7d775d8d218f2393fd8848a386ef6e?rik=7TbtU1w9lgPMvQ&pid=ImgRaw&r=0"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>

      <div className="header_nav">
        
<Link to= "/Login">
      <div className="header_option" onClick={handelAuthentication}>
      <span className="header_optionOne">Hello {user ? user.email : 'Guest'}, sign in</span>
      <span className="header_optionTwo">{user ? 'Sign Out' : 'Sign In'} Accounts & Lists</span>
     </div>
</Link>

 

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
<Link to="/checkout">
<div className="header_optionCart">
          <span className="header_optionOne">
            <AddShoppingCartIcon className="Add_ShoppingCart_Icon" />
          </span>
          <span className="header_optionTwo header_cartCount">
            Cart {basket.length}
          </span>
        </div>
</Link>
      </div>
    </header>
  );
};

export default Header;