import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";
export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="tranding"/>
    </div>
  );
}
