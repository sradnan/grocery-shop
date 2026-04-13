"use client";

import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Image from "next/image";
import logo from "./picture/logo.png";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useRouter } from "next/navigation";

function Navbar2() {
  const { totalItems } = useContext(CartContext);
  const router = useRouter();

  // ✅ category change handler
  const handleCategoryChange = (e) => {
    router.push(e.target.value);
  };

  return (
    <div className="w-full bg-gray-100 px-10 shadow-sm">
      <div className="max-w-9xl flex items-center justify-between px-4 py-3 gap-4">

        {/* 🔰 Logo */}
        <div className="flex items-center h-10 w-32 relative">
          <a href="/home">
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain"
            />
          </a>
        </div>

        {/* 🔍 Search Bar */}
        <div className=" flex items-center border rounded-md overflow-hidden w-full max-w-xl bg-white">

          {/* ✅ FIXED SELECT */}
          <select
            onChange={handleCategoryChange}
            className="px-3 py-2 text-sm border-r outline-none cursor-pointer"
          >
            <option value="/products">All Products</option>
            <option value="/products/coffestea">Coffee & Tea</option>
            <option value="/products/vegetables">Vegetables</option>
            <option value="/products/fruits">Fruits</option>
            <option value="/products/meats">Meats</option>
            <option value="/products/petfood">Pet Food</option>
          </select>

          <input
            type="text"
            placeholder="Search for items..."
            className=" hidden md:flex flex-1 px-3 py-2 outline-none text-sm"
          />

          <button className=" hidden md:flex items-center justify-center px-4 h-[35px] text-white bg-green-600 hover:bg-green-700 transition">
            Search
          </button>
        </div>

        {/* 📍 Right Section */}
        <div className="flex items-center gap-5 text-sm text-gray-600">

          {/* Become Vendor */}
          <div className="hidden lg:block border text-green-600 px-3 py-1 rounded-md cursor-pointer hover:bg-green-50 transition">
            Become Vendor →
          </div>

          {/* Compare */}
          <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <span>🔄</span>
            <span>Compare</span>
          </div>

          {/* Wishlist */}
          <div className="relative flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <FaHeart />
            <span className="hidden sm:block">Wishlist</span>
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* Cart */}
          <div className="relative flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <a href="/cart" className="flex items-center gap-1">
              <FaShoppingCart />
              <span className="hidden sm:block">Cart</span>
            </a>
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          </div>

          {/* Account */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <a href="/account" className="flex items-center gap-1">
              <FaUser />
              <span className="hidden sm:block">Account</span>
            </a>
          </div>

        </div>
      </div>

      {/* 🔍 Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center border rounded-md overflow-hidden bg-white">
          
          
        </div>
      </div>
    </div>
  );
}

export default Navbar2;