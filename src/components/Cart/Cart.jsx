import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

export default function Cart() {
  const fakeData = [
    {
      id: 1,
      image1: "../../../public/assets/pexels-andrea-piacquadio-3772506.jpg",
      image2: "./assets/pexels-ylanite-koppens-934070 2.jpg",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      title: "Product 1",
      isNew: true,
      oldPrice: 50,
      price: 40,
    },
    {
      id: 2,
      image1: "./assets/pexels-andrea-piacquadio-3772506.jpg",
      image: "./assets/pexels-ylanite-koppens-934070.jpg",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      title: "Product 1",
      isNew: true,
      oldPrice: 50,
      price: 40,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {fakeData?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image1} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 * ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTLAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart </span>
    </div>
  );
}
