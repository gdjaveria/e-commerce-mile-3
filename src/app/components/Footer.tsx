import React from "react";
import Image from "next/image";

const Foooter = () => {
  return (
    <>
      <div className="bg-black text-gray-300 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <Image
              src="/logo.png"
              alt="Fashion Logo"
              width={200}
              height={200}
            />
            <p>
              Pulvinar aenean dignissim porttitor sed risus urna pretium quis
              non id
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4 py-10">
              Information
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About me
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  My story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Awards & achievement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4 py-10">
              Discover
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Dresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Bottoms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Footwear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4 py-10">
              Locate Us
            </h2>
            <p>123 Demo Blvd, Miami, FL 4567, United States</p>
            <p>+1 123-456-7890</p>
            <p>mail@example.com</p>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="container mx-auto mt-5 px-4 text-center text-sm">
          <p>© 2025 Fashion Designer | Powered by Fashion Designer</p>
        </div>
      </div>
    </>
  );
};

export default Foooter;
