import Image from "next/image";
// import pata from "../"

import Sidebar1Data from "../side-bar-3/Sidebar1.jsx"
import Sidebar3Data from "../datasiderbar-3.jsx"

export default function FilterSidebar() {
  return (
    <div className="w-full lg:w-64 space-y-4">
      
      {/* Sidebar 1 */}
      <div className="bg-gray-100 p-3 rounded-lg shadow-md">
        <h1 className="font-semibold text-gray-700 mb-3">Categories</h1>

        {Sidebar1Data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between mb-3 px-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.icon}
                alt={item.Title}
                width={16}
                height={16}
              />
              <span className="text-gray-700">{item.Title}</span>
            </div>

            <span className="bg-green-300 rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Sidebar 2 */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        
        {/* Price */}
        <h2 className="font-semibold text-gray-700 mb-3">Filter by price</h2>

        <input
          type="range"
          min="0"
          max="1000"
          className="w-full accent-green-500"
        />

        <div className="flex justify-between text-sm mt-2 text-gray-600">
          <span>From: <span className="text-green-500">$500</span></span>
          <span>To: <span className="text-green-500">$1000</span></span>
        </div>

        {/* Color */}
        <div className="mt-5">
          <h2 className="font-semibold text-gray-700 mb-2">Color</h2>

          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Red (56)
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Green (78)
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Blue (54)
            </label>
          </div>
        </div>

        {/* Condition */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> New
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Refurbished
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Used
            </label>

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
              Filter
            </button>
          </div>

          <div className="flex items-center justify-center">
            {/* <Image src={pata} alt="banner" width={120} height={120} /> */}
          </div>
        </div>
      </div>

      {/* Sidebar 3 */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h1 className="font-semibold text-gray-700 mb-3">New Products</h1>

        {Sidebar3Data.map((item) => (
          <div key={item.id} className="flex gap-3 mb-4">
            <Image
              src={item.img}
              alt={item.Title}
              width={48}
              height={48}
              className="object-cover rounded"
            />

            <div>
              <h1 className="text-sm text-green-500">{item.Title}</h1>
              <h4 className="text-xs text-gray-400">{item.desc}</h4>
              <span>⭐</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}