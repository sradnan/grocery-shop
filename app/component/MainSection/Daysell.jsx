"use client";
import React from "react";
import Dayproduct from "../MainSection/AllCatagoriesDay/Daysell";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const DayProductCard = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-4 sm:px-5 py-3">
        <h1 className="text-lg sm:text-xl md:text-3xl font-semibold">
          Deals Of the Day
        </h1>

        <button className="text-gray-500 hover:text-green-600 transition text-xs sm:text-sm">
          All Deals →
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-3 sm:px-5 pb-6">
        {Dayproduct?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-24 sm:h-28 md:h-36 object-cover"
              />

              {/* Timer */}
              {item?.time && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {Object.entries(item.time).map(([key, value], i) => (
                    <div
                      key={i}
                      className="bg-white px-1 py-[2px] rounded text-center shadow text-[9px]"
                    >
                      <p className="text-green-500 font-bold">{value}</p>
                      <p className="text-gray-500 capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-2 sm:p-3 flex flex-col flex-grow">
              {/* Title */}
              <h2 className="font-semibold text-xs sm:text-sm mb-1 line-clamp-2 min-h-[32px]">
                {item.title}
              </h2>

              {/* Rating */}
              <p className="text-[10px] sm:text-xs text-yellow-500">
                ⭐ ({item.rating})
              </p>

              {/* Brand */}
              <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                By <span className="text-green-500">{item.brand}</span>
              </p>

              {/* Price + Button */}
              <div className="flex flex-col gap-1 mt-auto">
                <div className="flex items-center gap-1">
                  <span className="text-green-600 font-bold text-xs sm:text-sm">
                    ${item.price}
                  </span>
                  <span className="line-through text-gray-400 text-[10px]">
                    ${item.oldPrice}
                  </span>
                  <button onClick={() => addToCart(item)} className="flex justify-center bg-green-100 text-green-600 px-2 py-1 rounded-md text-[10px] sm:text-xs w-full hover:bg-green-200 transition">
                🛒 <span className="hidden sm:block ">Add to Cart</span>
              </button>
                </div>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DayProductCard;