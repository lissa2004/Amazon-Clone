import React from "react";
import "./products.css";
import Product from "./Product";



const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="Starlink Ethernet Adapter | Satellite Internet V2 | for Rectangle Dish"
          image="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/41hMpdIGyoL._AC_SL1080_.jpg"
          rating={5}
          price={17}
        />{""}

        <Product
          id="1"
          title="Starlink Ethernet Adapter | Satellite Internet V2 | for Rectangle Dish"
          image="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/41hMpdIGyoL._AC_SL1080_.jpg"
          rating={2}
          price={13}
        />{""}
      </div>

      <div className="products_row">
        <Product
          id="1"
          title="Starlink Ethernet Adapter | Satellite Internet V2 | for Rectangle Dish"
          image="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/41hMpdIGyoL._AC_SL1080_.jpg"
          rating={3}
          price={58}
        />

        <Product
          id="1"
          title="Starlink Ethernet Adapter | Satellite Internet V2 | for Rectangle Dish"
          image="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/41hMpdIGyoL._AC_SL1080_.jpg"
          rating={4}
          price={30}
        />

        <Product
          id="1"
          title="Starlink Ethernet Adapter | Satellite Internet V2 | for Rectangle Dish"
          image="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/41hMpdIGyoL._AC_SL1080_.jpg"
          rating={5}
          price={20}
        />
      </div>

      <div className="products_row">
        <Product
          id="1"
          title="Starlink Ethernet Adapter | Satellite Internet V2 | for Rectangle Dish"
          image="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/41hMpdIGyoL._AC_SL1080_.jpg"
          rating={4}
          price={10}
        />
      </div>
    </>
  );
};

export default Products;
