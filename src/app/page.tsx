"use client";

import HeroSection from "./components/Hero";
import Gallery from "./components/Gallery";
import React, { useEffect, useState } from "react";
import Products from "./components/ProductCard";

const page: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <HeroSection />

      <Gallery />

      <>
        <div className="flex flex-col text-center w-full mt-20">
          <h2 className="tracking-widest font-extrabold md:text-5xl text-3xl title-font mb-1">
            PRODUCTS
          </h2>
          <h1 className="font-medium text-4xl sm:text-3xl text-gray-700">
            Most Popular Products
          </h1>
        </div>
        {products.length > 0 ? (
          <Products products={products} />
        ) : (
          <div>Loading....</div>
        )}
      </>
    </div>
  );
};

export default page;
