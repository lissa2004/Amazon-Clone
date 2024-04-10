import React from "react";
import "./home.css"
import Products from "./Products";


const home = () => {
  return (
    <div className="home"> 
      <div className="home_container">
        <img className="home_image"
          src="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61CiqVTRBEL._SX3000_.jpg"
          alt="Background-img"
        />
        <Products /> 
      </div>
    </div>
  );
};

export default home;
