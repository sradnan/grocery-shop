
import ProductCard from "../component/MainSection/Allproduct";
import DayProductCard from "../component/MainSection/Daysell";
import HeroCarousel from "../component/MainSection/herosection";
import MiniHero from "../component/MainSection/miniHero";
import MostDemandingProduct from "../component/MainSection/Mosstcataproduct/MostRRST";
import ShopCatagory from "../component/MainSection/outerproduct/ShopByCatagoery";
import FilterSidebar from "../component/MainSection/side-bar-3/Sidebar";

function Home() {
  return (
    <div className="px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        
        {/* Sidebar (hidden on small devices) */}
        <div className="w-full mx-2 lg:w-64 lg:block hidden">
          <FilterSidebar />
        </div>

        {/* Hero Section */}
        <div className="flex-1 w-full">
          <HeroCarousel />
          <ProductCard></ProductCard>
          <DayProductCard></DayProductCard>
          <MiniHero></MiniHero>
        </div>


      </div>
      <ShopCatagory></ShopCatagory>
      <MostDemandingProduct></MostDemandingProduct>
      
    </div>
  );
}

export default Home;
