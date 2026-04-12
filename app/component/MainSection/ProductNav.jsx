import { useState } from "react";


export default function SubNavbar() {
  const [showAll, setShowAll] = useState(false);

  const toggleCategories = () => {
    setShowAll(!showAll);
  };

  return (
    <nav >
      <div className="flex items-center gap-4">
        {/* All Button */}
        <button
          onClick={toggleCategories}
          className="text-green-500 transition"
        >
          All
        </button>

        {/* Categories */}
        <div
         className={`flex flex-col sm:flex-row gap-4 transition-all duration-300 ${
            showAll ? "block sm:flex" : "hidden"
          }`}
        >
          <a className="hover:text-green-600 transition" href="/products/vegetables">Vegetables</a>
          <a className="hover:text-green-600 transition" href="/products/Milk&Dairies">Milks & Dairies</a>
          <a className="hover:text-green-600 transition" href="/products/coffestea">Coffes & Tea</a>
          <a className="hover:text-green-600 transition" href="/products/petfood">Pet Food</a>
          <a className="hover:text-green-600 transition" href="/products/meats">Meats</a>
          <a className="hover:text-green-600 transition" href="/products/fruits">Fruits</a>
        </div>
      </div>
    </nav>
  );
}