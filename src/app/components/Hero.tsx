import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const HeroPage: React.FC = () => {
  return (
    <div className="relative h-screen bg-gray-200">
      {/* Banner with Heading */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Fashion World
          </h1>
          <p className="text-xl text-white">
            Discover the latest trends in fashion
          </p>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/banner.jpg"
            alt="Fashion 1"
            width={1920}
            height={1080}
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner.jpg"
            alt="Fashion 2"
            width={1920}
            height={1080}
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner.jpg"
            alt="Fashion 3"
            width={1920}
            height={1080}
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroPage;
