function Navbar1() {
  return (
    <nav className=" w-full h-[41px] px-10 text-sm bg-white">
      <div className="max-w-9xl  flex items-center justify-between px-4 h-full">

        {/* 🔗 Left Links */}
        <div className="hidden md:flex items-center text-gray-600">
          <a href="#" className="px-3 border-r hover:text-green-600 transition">
            About Us
          </a>
          <a href="#" className="px-3 border-r hover:text-green-600 transition">
            My Account
          </a>
          <a href="#" className="px-3 border-r hover:text-green-600 transition">
            Wishlist
          </a>
          <a href="#" className="px-3 hover:text-green-600 transition">
            Order Tracking
          </a>
        </div>

        {/* 📢 Middle Text */}
        <div className="hidden lg:block text-green-500 text-center">
          <p>100% Secure delivery without contacting the courier</p>
        </div>

        {/* 🌐 Right Side */}
        <div className="flex items-center gap-3 text-gray-600">

          <p className="hidden lg:block">
            Need help? call us{" "}
            <span className="text-green-600 font-medium">
              01800 900
            </span>
          </p>

          {/* Language */}
          <select className="outline-none bg-transparent cursor-pointer">
            <option>EN</option>
            <option>BN</option>
          </select>

          {/* Currency */}
          <select className="outline-none bg-transparent cursor-pointer">
            <option>USD</option>
            <option>BDT</option>
          </select>

        </div>

      </div>
    </nav>
  );
}

export default Navbar1;