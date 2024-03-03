import React from "react";
import "./List.scss";
import Card from "../Card/Card";
export default function List() {
  const fakeData = [
    {
      id: 1,
      image1: "./assets/pexels-andrea-piacquadio-3772506.jpg",
      image2: "./assets/pexels-ylanite-koppens-934070 2.jpg",

      title: "Product 1",
      isNew: true,
      oldPrice: 50,
      price: 40,
    },
    {
      id: 2,
      image1: "./assets/pexels-andrea-piacquadio-3772506.jpg",
      image: "./assets/pexels-ylanite-koppens-934070.jpg",

      title: "Product 1",
      isNew: true,
      oldPrice: 50,
      price: 40,
    },
  ];

  return (
    <div className="list">
      {fakeData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
