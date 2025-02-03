import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import Image from "next/image";



const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white mt-14">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-4">
              <FaShippingFast className="w-14 h-14 text-black" />
            </div>
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="mt-2 text-sm text-gray-500">
              Far far away behind the word mountains, far from the countries
              Vokalia and Consonantia there live the blind texts
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <RiCustomerService2Fill className="w-14 h-14 text-black" />
            </div>
            <h3 className="text-lg font-semibold">Support Customer</h3>
            <p className="mt-2 text-sm text-gray-500">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <RiSecurePaymentFill className="w-14 h-14 text-black" />
            </div>
            <h3 className="text-lg font-semibold">Secure Payments</h3>
            <p className="mt-2 text-sm text-gray-500">
              Far far away, behind the word mountains far from the countries
              Vokalia and Consonantia there live the blind texts
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gray-100 p-8 rounded-lg">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="/about-pic.jpg"
                alt="Shop Image"
                width={500}
                height={500}
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
              <h2 className="text-2xl font-bold md:text-4xl">
                Established Since 1985
              </h2>
              <p className="mt-4 text-gray-600">
                tep into style with [Fashion Store], your go-to destination for
                chic and contemporary fashion. Our handpicked selection of
                clothing and accessories is designed to keep you on-trend and
                feeling confident. Find the perfect pieces to express your
                individuality and make every outfit unforgettable
              </p>
              <button className="mt-6 bg-black text-white hover:bg-gray-500 px-4 py-2 rounded">
                Shop now
              </button>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
