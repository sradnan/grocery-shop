"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Sliderdata from "./Slider";

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function ShopCatagory() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,

    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 320, settings: { slidesToShow: 1 } },
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        
        <div className="flex items-end gap-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Shop by Categories
          </h1>

          <button className="text-xs sm:text-sm text-gray-400 hover:text-blue-500 transition">
            All Categories
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:shadow-lg hover:-translate-x-1 transition"
          >
            ⬅
          </button>

          <button
            onClick={next}
            className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:shadow-lg hover:translate-x-1 transition"
          >
            ➡
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {Sliderdata.map((item) => (
          <div key={item.id} className="p-2">
            
            <div className="bg-gray-100 text-center font-semibold rounded-xl p-3 sm:p-4 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer h-full">
              
              {/* Image */}
              <div className="relative w-full h-[60px] sm:h-[80px] mb-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Text */}
              <p className="text-xs sm:text-sm">{item.title}</p>
              <p className="text-[10px] text-gray-500">
                {item.products} items
              </p>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ShopCatagory;