import React, { Fragment } from "react";
import ShopHeroSection from "../Shop/heroSection/ShopHeroSection";
import ProductsList from "../Shop/products/ProductsList";

export default function Shop() {
  return (
    <Fragment>
      <ShopHeroSection />
      <ProductsList />
    </Fragment>
  );
}
