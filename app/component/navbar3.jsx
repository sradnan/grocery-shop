import Image from "next/image";
import cont from "../component/picture/Container.png";
import fire from "../component/picture/SVG.png";
import headphone from "../component/picture/phone.png";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

function Navbar3() {
  return (
    <nav className="w-full px-10 bg-white">
      <div className="max-w-9xl  flex items-center justify-between px-4 py-3">

        {/* 🔵 Left Section */}
        <div className="flex items-center gap-6">

          {/* Categories Button */}
          <div className="hidden lg:flex bg-blue-600 items-center gap-2 px-2 py-2 rounded-md cursor-pointer">
            <Image src={cont} alt="icon" width={20} height={20} />
            <span className="text-white text-sm font-medium">
              Browse All Categories
            </span>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex items-center gap-5 text-gray-700 text-sm">

            {/* Hot Deals */}
            <a href="#" className="flex items-center gap-1 hover:text-green-600 transition">
              <Image src={fire} alt="hot" width={16} height={16} />
              Hot Deals
            </a>

            {/* Home Dropdown */}
            <a href="/home">Home</a>
            {/* <select name="Home" className="cursor-pointer">
              <option  value="/home">Home</option>
            </select> */}

            {/* About */}
            <a href="/about" className="hover:text-green-600 transition">
              About
            </a>

            {/* Shop */}
            <select name="Shop" className="cursor-pointer">
              <option value="/">Shop</option>
            </select>

            {/* Mega Menu */}
            <select name="MegaMenu" className="cursor-pointer">
              <option value="/">Mega Menu</option>
              <option value="/mega/menu1">Menu 1</option>
              <option value="/mega/menu2">Menu 2</option>
            </select>

            {/* Vendor */}
            <select name="Vendor" className="cursor-pointer">
              <option value="/">Vendor</option>
            </select>

            {/* Blog */}
            <select name="Blog" className="cursor-pointer">
              <option value="/">Blog</option>
            </select>

            {/* Contact */}
            <Link href="/contact" className="hover:text-green-600 transition">
              Contact
            </Link>

            <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-1">
           <p>Open</p>
       <ChevronDown size={16}/>
        </div>
      
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <NavigationMenu className="!w-24">
  <NavigationMenuList className="w-20">
    <NavigationMenuItem className="w-20">
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent className="w-20">
        <NavigationMenuLink className="text-red-500">Link 1</NavigationMenuLink>
        <NavigationMenuLink>Link 2</NavigationMenuLink>
        <NavigationMenuLink>Link 3</NavigationMenuLink> 
        <NavigationMenuLink>Link 4</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
          </div>
        </div>

        {/* 📞 Right Section */}
        <div className="hidden sm:block md:hidden lg:flex items-center gap-2">
          <Image src={headphone} alt="support" width={32} height={32} />

          <div className="hidden sm:block">
            <h1 className="text-blue-600 font-semibold leading-4">
              1900 88123
            </h1>
            <p className="text-xs text-gray-500">
              24/7 Support Center
            </p>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex overflow-x-auto gap-4 text-sm text-gray-600">
          <a href="#">Home</a>
          <a href="/shop">Shop</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar3;