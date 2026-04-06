"use client";

import Image from "next/image";
import Sliderdata from "./Slider";

const CategorySlider = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-4">
      {Sliderdata.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center cursor-pointer"
        >
          {/* Image */}
          <div className="w-20 h-20 mx-auto relative">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="mt-3 font-semibold text-sm">
            {item.title}
          </h3>

          {/* Product Count */}
          <p className="text-gray-500 text-xs">
            {item.products} Products
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;