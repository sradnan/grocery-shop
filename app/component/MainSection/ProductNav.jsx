import { useState } from "react";

const categories = [
  "Milks & Dairies",
  "Coffes & Tea",
  "Pet Food",
  "Meets",
  "Vegetables",
  "Fruits",
  
];

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
          className={`flex gap-4 transition-all duration-300 ${
            showAll ? "flex" : "hidden"
          }`}
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              className=" py-2 rounded hover:text-green-500 transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}