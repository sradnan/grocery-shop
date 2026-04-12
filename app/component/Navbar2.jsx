"use client";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Image from "next/image";
import logo from "./picture/logo.png";


function Navbar2() {
  return (
    <div className="w-full bg-gray-100 px-10 shadow-sm">
      <div className="max-w-9xl flex items-center  justify-between px-4 py-3 gap-4">

        {/* 🔰 Logo */}
        <div className="flex items-center h-10 w-32 relative">
          <a href="/">
          <Image
            src={logo}
            alt="Logo"
            fill
            className="object-contain"
          /></a>
        </div>

        {/* 🔍 Search Bar */}
        <div className="hidden md:flex items-center border rounded-md overflow-hidden w-full max-w-xl bg-white">
          <select className="px-3 py-2 text-sm border-r outline-none cursor-pointer">
            <option><a href="/products">All Products</a></option>
            <option><a href="/products/coffestea">Coffee & Tea</a></option>
            <option><a href="/products/vegetable"></a>Vegetables</option>
            <option><a href="/products/fruits">Fruits</a></option>
            <option><a href="/products/meats">Meats</a></option>
            <option><a href="/products/petfood">Pet Food</a></option>
          </select>
           
              
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-1 px-3 py-2 outline-none text-sm"
          />

          <button className="px-4 h-[35px] text-white bg-green-600 hover:bg-green-700 transition">
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
              6
            </span>
          </div>

          {/* Cart */}
          <div className="relative flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <a className="flex justify-center" href="/cart"><FaShoppingCart />
            <span className="hidden sm:block">Cart</span></a>
            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div>

          {/* Account */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <a href="/login" className="flex items-center justify-center gap-1"><FaUser />
            <span className="hidden sm:block">Account</span></a>
          </div>

        </div>
      </div>

      {/* 🔍 Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center border rounded-md overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-3 py-2 outline-none text-sm"
          />
          <button className="px-4 text-white bg-green-600">
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;