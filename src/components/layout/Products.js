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
          title="Bluetooth Beanie Headphones Hat Unique Christmas Tech Gifts"
          image="https://m.media-amazon.com/images/I/81OnmrlUepL._AC_UL320_.jpg"
          rating={2}
          price={13}
        />{""}
      </div>

      <div className="products_row">
        <Product
          id="1"
          title="Mini Projector for iPhone, ELEPHAS 2024 Upgraded 1080P HD Projector, 8000L Portable Projector with Tripod, Movie Projector Compatible with Android/iOS/Windows/TV Stick/HDMI/USB"
          image="https://m.media-amazon.com/images/I/61Ra0-2X8TL._AC_UY218_.jpg"
          rating={3}
          price={58}
        />

        <Product
          id="1"
          title="LAPGEAR Home Office Lap Desk with Device Ledge, Mouse Pad, and Phone Holder - Silver Carbon - Fits up to 15.6 Inch Laptops - Style No. 91585"
          image="https://m.media-amazon.com/images/I/815guTeGvyL._AC_UY218_.jpg"
          rating={4}
          price={30}
        />

        <Product
          id="1"
          title="Laptop Privacy Screen (15.6 Inch (Diagonal) - 16:9 Aspect Ratio) Removable Anti Glare Blue Light Filter Protector, 15.6 inch Laptop Privacy Screen Shield"
          image="https://m.media-amazon.com/images/I/71FlPoEuxBL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          rating={5}
          price={20}
        />
      </div>

      <div className="products_row">
        <Product
          id="1"
          title="N NOROCME 192 PCS Cable Management Kit 4 Wire Organizer Sleeve,11 Cable Holder,35Cord Clips 10+2 Roll Cable Organizer Straps and 100 Fastening Cable Ties for Computer TV Under Desk, black,clear"
          image="https://m.media-amazon.com/images/I/81F7bTfj+4L._AC_SY300_SX300_.jpg"
          rating={4}
          price={10}
        />
      </div>
    </>
  );
};

export default Products;
