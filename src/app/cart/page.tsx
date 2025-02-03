"use client";

import React, { useState, useEffect } from "react";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border p-4 my-2 flex justify-between">
            <span>{item.title}</span>
            <span>
              ${item.price} x {item.quantity}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
