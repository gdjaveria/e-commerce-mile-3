import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
        
      {/* Map Location Section */}
      <div className="mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153165!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f5f3%3A0x5045675218ceed30!2sYour%20Location%20Name!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau" // Replace with your Google Maps embed link
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Map Location"
        ></iframe>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-black md:text-4xl">
            Contact Us
          </h2>
          <p className="text-black ml-6">
            There are many ways to contact us. You may drop us a line give us a
            call or send an email choose what suits you the most.
          </p>
          <p className="text-lg font-medium text-black ml-6">
            <FaPhone size={20} className="inline mr-3 text-black" />
            (800) 686-6688
          </p>
          <p className="text-lg font-medium text-black ml-6">
            <FaEnvelope size={20} className="inline mr-3 text-black" />
            info.deercreative@gmail.com
          </p>
          <p className="text-black ml-6 font-semibold text-2xl md:text-2xl pt-4 font-serif">
            Open hours : 8.00 - 18.00 Monday - Friday
          </p>
          <p className="text-black ml-6 font-semibold text-2xl md:text-2xl pt-4 font-serif">
            Sunday: Closed
          </p>
          <div className="flex space-x-4 pt-8 ml-6">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={28} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={28} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaGooglePlusG size={30} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

        <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-black md:text-4xl">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600">
            Fill out the form below to receive a free and confidential response.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Website"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold p-3 rounded-md hover:bg-gray-500 transition duration-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
