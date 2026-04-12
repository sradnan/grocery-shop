
"use client";



import Vegproducts from './dataVegetable';

import { useContext } from "react";

import { CartContext } from "../../component/context/CartContext"

function Vegetable() {

     const { addToCart } = useContext(CartContext);
  return (
   <>
   
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mx-10 lg:grid-cols-4 gap-4 sm:gap-6 p-3 sm:p-4">
      {Vegproducts.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow p-3 sm:p-4 relative hover:shadow-lg transition"
        >
          {/* Discount */}
          <span className="absolute top-0 left-0 bg-green-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-br-2xl">
            {item.discount}
          </span>

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            width={200}
            height={160}
            className="w-full h-28 sm:h-36 md:h-40 object-contain"
          />

          {/* Content */}
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Baking material
          </p>

          <h2 className="font-semibold text-sm sm:text-base md:text-lg line-clamp-2 whitespace-nowrap">
            {item.title}
          </h2>

          <p className="text-green-500 text-xs sm:text-sm">
            By {item.brand}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between mt-2 sm:mt-3">
            <div>
              <span className="text-green-600 font-bold text-sm sm:text-base md:text-lg">
                ${item.price}
              </span>
              <span className="line-through text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2">
                ${item.oldPrice}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => addToCart(item)}
            className="mt-2 sm:mt-3 w-full bg-green-100 text-green-600 text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-2 rounded-lg hover:bg-green-200 transition"
          >
            🛒 Add
          </button>
        </div>
      ))}
    </div>
   
   
   </>
  )
}
export default Vegetable;
