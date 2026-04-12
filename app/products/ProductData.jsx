const ALproducts = [
  // ===== FRUITS (10) =====
  { id: 1, title: "Fresh Apple", category: "Fruit", price: 3.5, oldPrice: 4.0, star: "4.5", brand: "Green Farm", discount: "10%", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6" },
  { id: 2, title: "Banana Bunch", category: "Fruit", price: 2.2, oldPrice: 3.0, star: "4.3", brand: "Tropical Farm", discount: "15%", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e12f" },
  { id: 3, title: "Orange Pack", category: "Fruit", price: 4.0, oldPrice: 5.0, star: "4.6", brand: "Citrus Valley", discount: "10%", image: "https://images.unsplash.com/photo-1547514701-42782101795e" },
  { id: 4, title: "Mango Box", category: "Fruit", price: 6.5, oldPrice: 8.0, star: "4.7", brand: "Deshi Mango", discount: "12%", image: "https://images.unsplash.com/photo-1553279768-865429fa0078" },
  { id: 5, title: "Grapes", category: "Fruit", price: 5.0, oldPrice: 6.0, star: "4.4", brand: "Fresh Valley", discount: "10%", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f" },
  { id: 6, title: "Watermelon", category: "Fruit", price: 7.5, oldPrice: 9.0, star: "4.6", brand: "Summer Farm", discount: "15%", image: "https://images.unsplash.com/photo-1563114773-84221bd62daa" },
  { id: 7, title: "Pineapple", category: "Fruit", price: 4.8, oldPrice: 6.0, star: "4.5", brand: "Tropical Fresh", discount: "10%", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba" },
  { id: 8, title: "Strawberry Pack", category: "Fruit", price: 6.0, oldPrice: 7.5, star: "4.8", brand: "Berry Farm", discount: "12%", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6" },
  { id: 9, title: "Papaya", category: "Fruit", price: 3.0, oldPrice: 4.0, star: "4.2", brand: "Healthy Farm", discount: "10%", image: "https://images.unsplash.com/photo-1617112848923-cc2234396a9d" },
  { id: 10, title: "Guava", category: "Fruit", price: 2.8, oldPrice: 3.5, star: "4.3", brand: "Local Farm", discount: "8%", image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716" },

  // ===== VEGETABLES (10) =====
  { id: 11, title: "Tomato", category: "Vegetable", price: 1.5, oldPrice: 2.0, star: "4.2", brand: "Green Farm", discount: "10%", image: "https://images.unsplash.com/photo-1546470427-227c0b6a5f5f" },
  { id: 12, title: "Potato", category: "Vegetable", price: 1.2, oldPrice: 1.8, star: "4.3", brand: "Fresh Valley", discount: "12%", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655" },
  { id: 13, title: "Carrot", category: "Vegetable", price: 1.8, oldPrice: 2.2, star: "4.4", brand: "Organic Farm", discount: "10%", image: "https://images.unsplash.com/photo-1445282768818-728615cc910a" },
  { id: 14, title: "Cabbage", category: "Vegetable", price: 2.0, oldPrice: 2.5, star: "4.1", brand: "Green Land", discount: "8%", image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f" },
  { id: 15, title: "Onion", category: "Vegetable", price: 1.3, oldPrice: 1.8, star: "4.3", brand: "Farm Fresh", discount: "10%", image: "https://images.unsplash.com/photo-1508747703725-719777637510" },
  { id: 16, title: "Garlic", category: "Vegetable", price: 2.5, oldPrice: 3.0, star: "4.5", brand: "Spice Farm", discount: "10%", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb" },
  { id: 17, title: "Cucumber", category: "Vegetable", price: 1.0, oldPrice: 1.5, star: "4.2", brand: "Green Farm", discount: "10%", image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6" },
  { id: 18, title: "Spinach", category: "Vegetable", price: 1.4, oldPrice: 2.0, star: "4.4", brand: "Leaf Farm", discount: "15%", image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5" },
  { id: 19, title: "Eggplant", category: "Vegetable", price: 1.6, oldPrice: 2.0, star: "4.1", brand: "Deshi Farm", discount: "10%", image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976" },
  { id: 20, title: "Green Chili", category: "Vegetable", price: 0.9, oldPrice: 1.2, star: "4.3", brand: "Spicy Farm", discount: "10%", image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0a" },

  // ===== MEAT (10) =====
  { id: 21, title: "Chicken Breast", category: "Meat", price: 8.5, oldPrice: 10.0, star: "4.6", brand: "Farm Fresh", discount: "10%", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791" },
  { id: 22, title: "Beef Steak", category: "Meat", price: 14.9, oldPrice: 18.0, star: "4.7", brand: "Prime Meat", discount: "15%", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e" },
  { id: 23, title: "Lamb Chops", category: "Meat", price: 16.5, oldPrice: 20.0, star: "4.5", brand: "Green Valley", discount: "12%", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" },
  { id: 24, title: "Chicken Wings", category: "Meat", price: 7.9, oldPrice: 9.5, star: "4.4", brand: "Farm Fresh", discount: "10%", image: "https://images.unsplash.com/photo-1605475122071-2c1f1c0a0f1a" },
  { id: 25, title: "Minced Beef", category: "Meat", price: 9.7, oldPrice: 12.0, star: "4.3", brand: "Butcher House", discount: "10%", image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976" },
  { id: 26, title: "Whole Chicken", category: "Meat", price: 11.0, oldPrice: 13.5, star: "4.6", brand: "Organic Farm", discount: "12%", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a" },
  { id: 27, title: "Ribeye Steak", category: "Meat", price: 19.9, oldPrice: 24.0, star: "4.8", brand: "Premium Cuts", discount: "17%", image: "https://images.unsplash.com/photo-1603048297172-7f6a9b7c6c0d" },
  { id: 28, title: "Chicken Drumsticks", category: "Meat", price: 6.5, oldPrice: 8.0, star: "4.2", brand: "Farm Fresh", discount: "10%", image: "https://images.unsplash.com/photo-1604908554027-2d5f4c1d1c9b" },
  { id: 29, title: "Turkey Slices", category: "Meat", price: 12.2, oldPrice: 15.0, star: "4.5", brand: "Healthy Choice", discount: "11%", image: "https://images.unsplash.com/photo-1600628422019-6c8c6f4a2c1a" },
  { id: 30, title: "Goat Meat", category: "Meat", price: 13.5, oldPrice: 16.0, star: "4.4", brand: "Desi Meat", discount: "14%", image: "https://images.unsplash.com/photo-1604908177522-5f8f3a7c2a1e" },

  // ===== COFFEE (10) =====
  { id: 31, title: "Arabica Coffee Beans", category: "Coffee", price: 9.5, oldPrice: 12.0, star: "4.7", brand: "Coffee House", discount: "10%", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e" },
  { id: 32, title: "Robusta Coffee", category: "Coffee", price: 8.0, oldPrice: 10.0, star: "4.4", brand: "Bean Farm", discount: "12%", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { id: 33, title: "Instant Coffee", category: "Coffee", price: 5.5, oldPrice: 7.0, star: "4.2", brand: "Quick Brew", discount: "10%", image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff" },
  { id: 34, title: "Espresso Roast", category: "Coffee", price: 10.5, oldPrice: 13.0, star: "4.6", brand: "Dark Bean", discount: "15%", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
  { id: 35, title: "Cold Brew Coffee", category: "Coffee", price: 6.8, oldPrice: 8.0, star: "4.5", brand: "Chill Coffee", discount: "10%", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5" },
  { id: 36, title: "Latte Mix", category: "Coffee", price: 7.2, oldPrice: 9.0, star: "4.3", brand: "Milk Brew", discount: "10%", image: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e" },
  { id: 37, title: "Cappuccino Pack", category: "Coffee", price: 7.8, oldPrice: 9.5, star: "4.4", brand: "Foam Coffee", discount: "10%", image: "https://images.unsplash.com/photo-1534778101976-62847782c213" },
  { id: 38, title: "Mocha Coffee", category: "Coffee", price: 8.5, oldPrice: 10.5, star: "4.6", brand: "Choco Brew", discount: "12%", image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6" },
  { id: 39, title: "Black Coffee Powder", category: "Coffee", price: 6.0, oldPrice: 7.5, star: "4.3", brand: "Strong Brew", discount: "10%", image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571" },
  { id: 40, title: "Premium Coffee Beans", category: "Coffee", price: 11.5, oldPrice: 14.0, star: "4.8", brand: "Luxury Bean", discount: "15%", image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd" },

  // ===== TEA (10) =====
  { id: 41, title: "Black Tea", category: "Tea", price: 3.5, oldPrice: 4.5, star: "4.3", brand: "Tea Garden", discount: "10%", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574" },
  { id: 42, title: "Green Tea", category: "Tea", price: 4.0, oldPrice: 5.0, star: "4.5", brand: "Healthy Leaf", discount: "12%", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71" },
  { id: 43, title: "Milk Tea Mix", category: "Tea", price: 5.5, oldPrice: 6.5, star: "4.4", brand: "Sweet Tea", discount: "10%", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7" },
  { id: 44, title: "Herbal Tea", category: "Tea", price: 6.0, oldPrice: 7.5, star: "4.6", brand: "Nature Tea", discount: "12%", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e" },
  { id: 45, title: "Lemon Tea", category: "Tea", price: 4.5, oldPrice: 5.5, star: "4.3", brand: "Citrus Tea", discount: "10%", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e" },
  { id: 46, title: "Ginger Tea", category: "Tea", price: 4.8, oldPrice: 6.0, star: "4.5", brand: "Spice Tea", discount: "10%", image: "https://images.unsplash.com/photo-1511994714008-b6d68a8b6b53" },
  { id: 47, title: "Masala Tea", category: "Tea", price: 5.2, oldPrice: 6.5, star: "4.6", brand: "Desi Tea", discount: "12%", image: "https://images.unsplash.com/photo-1515829568852-49c1c6c4d52f" },
  { id: 48, title: "Iced Tea", category: "Tea", price: 3.8, oldPrice: 4.5, star: "4.2", brand: "Cool Tea", discount: "10%", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc" },
  { id: 49, title: "Oolong Tea", category: "Tea", price: 6.5, oldPrice: 8.0, star: "4.7", brand: "Asian Leaf", discount: "15%", image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd8" },
  { id: 50, title: "Premium Tea Leaves", category: "Tea", price: 7.0, oldPrice: 9.0, star: "4.8", brand: "Royal Tea", discount: "15%", image: "https://images.unsplash.com/photo-1510693206972-df098062cb71" }
];
export default ALproducts;