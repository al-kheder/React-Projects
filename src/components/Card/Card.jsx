import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
export default function Card({ item }) {
  return (
    <Link className="link" top={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.image1} className="mainImage" alt="" />
          <img src={item.image2} className="secondImage" alt="" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>$ {item.oldPrice}</h3>
          <h3>$ {item.price}</h3>
        </div>
      </div>
    </Link>
  );
}
