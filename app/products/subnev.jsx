import { useState } from "react";


export default function SubNavBar() {
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
          className={`flex gap-4 transition-all duration-300 ${
            showAll ? "flex" : "hidden hover:bg-blue-700"
          }`}
        >
          <a className="hover:text-green-600 transition" href="/products/vegetables">Vegetables</a>
          <a className="hover:text-green-600 transition" href="/products/milk">Milks & Dairies</a>
          <a className="hover:text-green-600 transition" href="/products/coffestea">Coffes & Tea</a>
          <a className="hover:text-green-600 transition" href="/products/petfood">Pet Food</a>
          <a className="hover:text-green-600 transition" href="/products/meats">Meats</a>
          <a className="hover:text-green-600 transition"href="/products/fruits">Fruits</a>
        </div>
      </div>
    </nav>
  );
}