"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return; // Ensure `id` exists before fetching
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  // Increase Quantity
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  // Decrease Quantity
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Add Product to Local Storage
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cart, { ...product, quantity }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product added to cart!");
  };

  // Remove Product from Local Storage
  const removeFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.filter((item: Product) => item.id !== product?.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product removed from cart!");
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 text-lg my-4">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>

          {/* Quantity Controls */}
          <div className="flex items-center mt-4">
            <button
              className="px-4 py-2 bg-gray-300"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="px-4 py-2 bg-gray-300"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          {/* Add to Cart & Remove Buttons */}
          <div className="mt-6">
            <button
              className="bg-blue-500 text-white px-5 py-2 rounded"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-red-500 text-white px-5 py-2 rounded ml-3"
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
