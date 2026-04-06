import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import cont from "./logo.svg fill.png";
import pl from "./162.png";
import pb from "./163.png" 
import Image from "next/image";


function Footer() {
  return (
    <footer className="bg-white  mx-10 mt-5">
      <div className=" mx-auto px-6 pt-10 grid grid-cols-2 md:grid-cols-7 m-10 gap-8">
        {/* Logo & Contact */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <Image src={cont} alt="Nest Logo" className="w-18 h-12"/>
           
          </div>
          <p className="text-gray-600 text-sm">Awesome grocery store website template</p>
          <div className="text-gray-600 text-sm space-y-1">
            <p>📍 Address: 5171 W Campbell Ave, undefined Kent, Utah 53127 United States</p>
            <p>📞 Call Us: (+91) 540-025-124553</p>
            <p>✉ Email: sale@Nest.com</p>
            <p>⏰ Hours: 10:00 - 18:00, Mon - Sat</p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><a href="/about" className="hover:text-green-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Delivery Information</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Support Center</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Careers</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-2">Account</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-green-600 transition">Sign In</a></li>
            <li><a href="#" className="hover:text-green-600 transition">View Cart</a></li>
            <li><a href="#" className="hover:text-green-600 transition">My Wishlist</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Track My Order</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Help Ticket</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Shipping Details</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Compare Products</a></li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-2">Corporate</h3>
         <ul className="space-y-1 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-green-600 transition">Become a Vendor</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Farm Business</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Farm Careers</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Our Suppliers</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Accessibility</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Promotions</a></li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-2">Popular</h3>
         <ul className="space-y-1 text-gray-600 text-sm">
          <li><a href="#" className="hover:text-green-600 transition">Milk & Flavoured Milk</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Butter and Margarine</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Eggs Substitutes</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Marmalades</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Sour Cream and Dips</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Tea & Kombucha</a></li>
          <li><a href="#" className="hover:text-green-600 transition">Cheese</a></li>
        </ul>
        </div>
        {/* App Links */}
        <div >
            <h3 className="text-gray-800 font-semibold mb-2">Install App</h3>
            <ul className="space-y-1 flex gap-2 justify-center items-center text-gray-600 text-sm">
                <li><a href="#"><Image src={pl} alt="App Store" className="h-10"/></a></li>
                <li><a href="#"><Image src={pb} alt="App Store" className="h-10"/></a></li>
            </ul>
        </div>
      </div>

     
      
        

        {/* Support & Follow */}
        <div className="flex flex-col md:flex-row mx-10 justify-between items-center  space-y-2 md:space-y-0 md:space-x-6 text-gray-600 text-sm">
          
          <div className="text-center text-gray-400 text-xs py-2">
        © 2022, Nest - HTML Ecommerce Template. <br /> All rights reserved.
      </div>
          <div className="flex space-x-4">
            
            <h1 className="text-xl text-green-400">
                1900 - 6666 <br /><span className="text-sm text-gray-300">(Working 8:00 - 22:00)</span>
            </h1>
            <h1 className="text-xl text-green-400">
                1900 - 8888 <br /><span className="text-sm text-gray-300">(24/7 Support Center)</span>
            </h1>
            {/* <span className="text-2xl text-green-600">📞 1900 - 6666 (Working 8:00 - 22:00)</span> */}
            {/* <span className="text-2xl text-green-600">📞 1900 - 8888 </span> */}
          </div>
          <div className="flex space-x-3 ">
            <a href="#"><FaFacebookF className="text-green-600" /></a>
            <a href="#"><FaTwitter className="text-green-600" /></a>
            <a href="#"><FaInstagram className="text-green-600" /></a>
            <a href="#"><FaLinkedinIn className="text-green-600" /></a>
            <a href="#"><FaYoutube className="text-green-600" /></a>
          </div>
        </div>
      

      
    </footer>
  );
}

export default Footer;