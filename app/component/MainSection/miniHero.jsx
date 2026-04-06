"use client";

import Image from "next/image";
import MiniHerodata from "../MainSection/mini-Hero/MiniHerodata"; 

const MiniHero = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 px-5 py-6">
      {MiniHerodata.map((item) => (
        <div
          key={item.id}
          className="relative rounded-2xl overflow-hidden group cursor-pointer h-48 sm:h-56"
        >
          {/* 🖼 Image */}
          <Image
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6">
            
            {/* Title */}
            <h2 className="text-sm sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 max-w-[200px] ">
              {item.title}
            </h2>

            {/* Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-md w-fit text-xs sm:text-sm transition">
              Shop Now →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniHero;