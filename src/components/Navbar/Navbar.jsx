import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wraper">
        {/* left part */}
        <div className="left">
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link
              className="link
            "
              to="/products/2"
            >
              Man
            </Link>
          </div>
          <div className="item">
            <Link
              className="link
            "
              to="/products/3"
            >
              Children
            </Link>
          </div>
          <div className="item">
            <Link
              className="link
            "
              to="/products/4"
            >
              Accesories
            </Link>
          </div>
        </div>
        {/* middel part */}
        <div className="center">
          <Link className="link" to="/">
            Creative DesoCode
          </Link>
        </div>
        {/* right part */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/About">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/stores">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <FavoriteBorderOutlinedIcon />
            <PersonOutlinedIcon />
            <div
              className="cartIcon"
              onClick={() => {
                setisOpen(!isOpen);
              }}
            >
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Cart />}
    </div>
  );
}
