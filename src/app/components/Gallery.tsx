import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-24">
        <div className="relative group">
          <Image
            src="/img2.jpg"
            alt="New"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <h2 className="text-white md:text-4xl text-xl font-extrabold hover:underline">
              New Arrivals
            </h2>
          </div>
        </div>
        <div className="relative group col-span-2">
          <Image
            src="/img9.jpg"
            alt="Top Trending"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <h2 className="text-white md:text-4xl text-xl font-extrabold hover:underline">
              Top Trending
            </h2>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/img4.jpg"
            alt="Must-Haves"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <h2 className="text-white text-xl md:text-4xl font-extrabold hover:underline">
              Must-Haves
            </h2>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/img7.jpg"
            alt="Shoes"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <h2 className="text-white text-xl md:text-4xl font-extrabold hover:underline">
              Shoes
            </h2>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/img5.jpg"
            alt="Bags"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <h2 className="text-white text-xl md:text-4xl font-extrabold hover:underline">
              Bags
            </h2>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/img3.jpg"
            alt="50% Off"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <h2 className="text-white text-xl md:text-4xl font-bold hover:underline">
              50% Off
            </h2>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/img8.jpg"
            alt="Special Offer"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <h2 className="text-white text-xl md:text-4xl font-extrabold hover:underline">
              Special Offer
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
