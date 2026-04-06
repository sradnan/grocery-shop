import TopSellData from "./TopsellData"
import TrandingData from "./TrandingData"
import RecentAddData from "./RecentAddata"
import TopRatedData from "./Topratedata"
import Image from "next/image";



function MostDemandingProduct() {
  return (
    <>
      <section className="m-4 sm:m-6 lg:m-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Top Selling */}
          <div className="h-full">
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
              <h1 className="font-semibold text-lg sm:text-xl text-gray-700 mb-3">
                Top Selling
              </h1>

              {TopSellData.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 mb-4 hover:shadow-md hover:-translate-y-1 transition duration-300"
                >
                  <Image
                    src={item.img}
                    alt="logo"
                    className="w-16 h-16 object-cover rounded-md"
                  />

                  <div className="text-xs sm:text-sm">
                    <h1 className="text-green-500">{item.Title}</h1>
                    <p className="mt-1">
                      ⭐ <span className="text-gray-300">({item.rate})</span>
                    </p>
                    <span className="text-green-600 font-bold">
                      {item.desc}
                    </span>
                    <br />
                    <span className="line-through text-gray-400 text-xs">
                      ${item.oldPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Repeat same style for others */}
          
          <div className="h-full">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full">
              <h1 className="font-semibold text-lg sm:text-xl text-gray-700 mb-3">
                Tranding Products
              </h1>

              {TrandingData.map((item) => (
                <div key={item.id} className="flex gap-3 mb-4 hover:shadow-md hover:-translate-y-1 transition duration-300">
                  <Image src={item.img} alt="" className="w-16 h-16 object-cover rounded-md" />
                  <div className="text-xs sm:text-sm">
                    <h1 className="text-green-500">{item.Title}</h1>
                    <p>⭐ <span className="text-gray-300">({item.rate})</span></p>
                    <span className="text-green-600 font-bold">{item.desc}</span><br/>
                    <span className="line-through text-gray-400 text-xs">${item.oldPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md h-full">
              <h1 className="font-semibold text-lg sm:text-xl text-gray-700 mb-3">
                Recently Add Product
              </h1>

              {RecentAddData.map((item) => (
                <div key={item.id} className="flex gap-3 mb-4 hover:shadow-md hover:-translate-y-1 transition duration-300">
                  <Image src={item.img} alt="" className="w-16 h-16 object-cover rounded-md" />
                  <div className="text-xs sm:text-sm">
                    <h1 className="text-green-500">{item.Title}</h1>
                    <p>⭐ <span className="text-gray-300">({item.rate})</span></p>
                    <span className="text-green-600 font-bold">{item.desc}</span><br/>
                    <span className="line-through text-gray-400 text-xs">${item.oldPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full">
            <div className="bg-gray-300 p-4 rounded-lg shadow-md h-full">
              <h1 className="font-semibold text-lg sm:text-xl text-gray-700 mb-3">
                Top Rated Product
              </h1>

              {TopRatedData.map((item) => (
                <div key={item.id} className="flex gap-3 mb-4 hover:shadow-md hover:-translate-y-1 transition duration-300">
                  <Image src={item.img} alt="" className="w-16 h-16 object-cover rounded-md" />
                  <div className="text-xs sm:text-sm">
                    <h1 className="text-green-500">{item.Title}</h1>
                    <p>⭐ <span className="text-gray-300">({item.rate})</span></p>
                    <span className="text-green-600 font-bold">{item.desc}</span><br/>
                    <span className="line-through text-gray-400 text-xs">${item.oldPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
export default MostDemandingProduct;