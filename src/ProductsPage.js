import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  return (
    <>
      <div className="grid gap-10 h-100 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>

        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>

        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </>
  );
};

export default ProductsPage;
