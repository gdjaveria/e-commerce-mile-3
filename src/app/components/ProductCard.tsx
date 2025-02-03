"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define Product type............
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

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products = [] }) => {
  return (
    <>
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              const { id, title, description, price, category, image, rating } =
                product;
              return (
                <div
                  key={id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-5 cursor-pointer"
                >
                  <Link href={`/product/${id}`} passHref>
                    <div className="block relative h-48 rounded overflow-hidden">
                      <Image
                        alt={title}
                        className="object-contain object-center w-full h-full block"
                        src={image}
                        width={500}
                        height={500}
                      />
                    </div>
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p className="mt-1 font-semibold">${price}</p>
                    {/* Display Rating */}
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">
                        {"★".repeat(Math.floor(rating.rate))}
                      </span>
                      <span className="text-gray-500 ml-2">
                        ({rating.count} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
