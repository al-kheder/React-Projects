import React from "react";
import "./Card.scss";
import { Link } from "@mui/material";
export default function Card({ item }) {
  return (
    <Link top={`/priduct/${item.id}`}>
      <div className="card">
        <div className="image">
            <img src={item.img} className="mainImage" alt="" />
            <img src={item.id} className="secondImage" alt="" />
        </div>
      </div>
    </Link>
  );
}
