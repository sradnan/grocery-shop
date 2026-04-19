"use client";

import Image from "next/image";
import cont from "../component/picture/Container.png";
import fire from "../component/picture/SVG.png";
import headphone from "../component/picture/phone.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

function Navbar3() {
  return (
    <nav className="w-full px-10 bg-white sm:block">
      <div className="max-w-9xl flex items-center justify-between px-4 py-3">

        {/* 🔵 Left Section */}
        <div className="flex items-center gap-6">

          {/* Categories Button */}
          <div className="hidden lg:flex bg-blue-600 items-center gap-2 px-2 py-2 rounded-md cursor-pointer">
            <a className="flex items-center gap-2" href="/products">
              <Image src={cont} alt="icon" width={20} height={20} />
              <span className="text-white text-sm font-medium">
                Browse All Categories
              </span>
            </a>
          </div>

          {/* Menu Links */}
          <div className="flex items-center gap-5 text-gray-700 text-sm">

            {/* Hot Deals */}
            <a href="/products/hotdeal" className="flex items-center gap-1 hover:text-green-600 transition">
              <Image src={fire} alt="hot" width={16} height={16} />
              Hot Deals
            </a>

            <a href="/home" className="hover:text-green-600 transition">Home</a>
            <a href="/products" className="hover:text-green-600 transition">Products</a>
            <a href="/about" className="hover:text-green-600 transition">About</a>

            {/* Shop */}
            <NavigationMenu className="!w-24">
              <NavigationMenuList className="w-20">
                <NavigationMenuItem className="w-20">
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-20">
                    <NavigationMenuLink className="text-red-500">Shop-1</NavigationMenuLink>
                    <NavigationMenuLink>Shop-2</NavigationMenuLink>
                    <NavigationMenuLink>Shop-3</NavigationMenuLink>
                    <NavigationMenuLink>Shop-4</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mega Menu */}
            <NavigationMenu className="!w-24">
              <NavigationMenuList className="w-20">
                <NavigationMenuItem className="w-20">
                  <NavigationMenuTrigger>Mega Menu</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-20">
                    <NavigationMenuLink className="text-red-500">Vegetable</NavigationMenuLink>
                    <NavigationMenuLink>Soft Drink</NavigationMenuLink>
                    <NavigationMenuLink>Jhak Food</NavigationMenuLink>
                    <NavigationMenuLink>Baby Product</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Vendor */}
            <NavigationMenu className="!w-24">
              <NavigationMenuList className="w-20">
                <NavigationMenuItem className="w-20">
                  <NavigationMenuTrigger>Vender</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-20">
                    <NavigationMenuLink className="text-red-500">Pran</NavigationMenuLink>
                    <NavigationMenuLink>Lux</NavigationMenuLink>
                    <NavigationMenuLink>Shopno</NavigationMenuLink>
                    <NavigationMenuLink>Mina Bazar</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/contact" className="hover:text-green-600 transition">
              Contact
            </Link>

          </div>
        </div>

        {/* 📞 Right Section */}
        <div className="hidden lg:flex items-center gap-2">
          <Image src={headphone} alt="support" width={32} height={32} />

          <div>
            <h1 className="text-blue-600 font-semibold leading-4">
              1900 88123
            </h1>
            <p className="text-xs text-gray-500">
              24/7 Support Center
            </p>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar3;