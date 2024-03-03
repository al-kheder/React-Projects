import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const images = [
    "../../../public/assets/pexels-andrea-piacquadio-3772506.jpg",
    "../../../public/assets/pexels-terje-sollie-298864.jpg",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt=""
            onClick={(e) => {
              setSelectedImg(0);
            }}
          />
          <img
            src={images[1]}
            alt=""
            onClick={(e) => {
              setSelectedImg(1);
            }}
          />
        </div>
        <div className="mainImage">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title </h1>
        <span className="price">$55</span>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lo
        </p>
        <div className="quantity">
          <button
            onClick={() => {
              setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
            }}
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendro:polo</span>
          <span>product Type: T-shirt</span>
          <span>Tag: T-shirt, women, Top</span>
        </div>
        <div className="info">
          <hr />
          <span>DESCRIPTION</span>

          <span>ADDITIONAL INFORMATION</span>

          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
