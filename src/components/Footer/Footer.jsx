import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consectetur consectetur lectus at vestibulum. Nam quis faucibus
            libero, ut consequat ex. Vestibulum auctor nisl ac consequat
            egestas. Ut
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consectetur consectetur lectus at vestibulum. Nam quis faucibus
            libero, ut consequat ex. Vestibulum auctor nisl ac consequat
            egestas. Ut
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Creative DesoCode</span>
          <span className="copyright">  &copy; Copyright 2024</span>
        </div>
        <img
          className="right"
          src="../../../public/assets/payments.png"
          alt="payments images"
        />
      </div>
    </div>
  );
}
