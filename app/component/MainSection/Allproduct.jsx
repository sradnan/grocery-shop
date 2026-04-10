"use client";
import Image from "next/image";
import products from "../MainSection/Data-product/Dataproduct";
import SubNavbar from "./ProductNav";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard(){
  const { addToCart } = useContext(CartContext);

   

  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mx-4 sm:mx-5 pt-5 gap-3">
        <h1 className="text-lg sm:text-xl md:text-3xl font-semibold">
          Popular Product 
        </h1>

        <div className="w-full md:w-auto">
          <SubNavbar />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-2 sm:p-3 relative flex flex-col h-full hover:shadow-lg transition"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-24 sm:h-28 md:h-36 object-contain"
            />

            {/* Content */}
            <h2 className="font-semibold text-xs sm:text-sm mt-1 line-clamp-2">
              {item.title}
            </h2>

            {/* Price + Button */}
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex items-center gap-1">
                <span className="text-green-600 font-bold text-xs sm:text-sm">
                  ${item.price}
                </span>

                {/* ✅ Add to Cart */}
                <button
                onClick={() => addToCart(item)} 
                  
                  className="flex justify-center bg-green-100 text-green-600 px-2 py-1 rounded-md text-[10px] sm:text-xs w-full hover:bg-green-200 transition"
                >
                  🛒 <span className="hidden sm:block">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;