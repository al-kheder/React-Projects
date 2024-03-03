import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import "./Products.scss";
export default function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="fliterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="fliterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              name=""
              id=""
              min={0}
              max={1000}
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="fliterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="1"
              value="asc"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            />
            <label htmlFor="asc">price(Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id=""
              value="desc"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            />
            <label htmlFor="desc">price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="../../../public/assets/pexels-ylanite-koppens-934070.jpg"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}
