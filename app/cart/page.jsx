"use client";

import {
  ButtonGroup,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

import { useContext, useState } from "react";
import { CartContext } from "../component/context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";

import { PaymentDropdown } from "../../components/ui/PaymentDropdown";
import { PaymentDialog } from "./payment";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty, } = useContext(CartContext);
  const [isChecked, setisChecked]=useState(false);

  // selected items
  const [clickitem, setClickItem] = useState([]);

  // delivery charge
  const [delivery, setDelivery] = useState(2);

  // single select
  const handleselect = (id) => {
    setClickItem((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // select all
  const handleSelectAll = () => {
    if (clickitem.length === cart.length) {
      setClickItem([]);
    } else {
      setClickItem(cart.map((item) => item.id));
    }
  };

  // total only selected
  const subtotal = cart.reduce((sum, item) => {
    if (clickitem.includes(item.id)) {
      return sum + item.price * item.qty;
    }
    return sum;
  }, 0);

  const total = subtotal + delivery;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <h1 className="text-center text-2xl text-gray-500">
          No items in cart
        </h1>
        <p className="text-gray-500">Your all Favourite Items are available <span className="text-blue-500 "><a href="/products">here...</a></span></p>
        </div>
        
      ) : (
        <div className="flex flex-col bg-gray-300 p-10 rounded-2xl lg:flex-row gap-6">

          {/* ================= LEFT: CART LIST ================= */}
          <div className="flex-1 bg-amber-100 p-5 rounded-2xl flex flex-col gap-4">

            {/* SELECT ALL */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={
                  clickitem.length === cart.length && cart.length > 0
                }
                onChange={handleSelectAll}
              />
              <span>Select All</span>
            </div>

            {/* CART ITEMS */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 bg-white shadow-md rounded-xl border"
              >
                {/* checkbox */}
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={clickitem.includes(item.id)}
                  onChange={() => handleselect(item.id)}
                />

                {/* product info */}
                <div className="flex items-center gap-4 w-full">
                  <img
                    className="w-16 h-16 hover:w-full hover:h-full object-cover rounded"
                    src={item.image}
                    alt=""
                  />

                  <div>
                    <h2 className="font-semibold">
                      {item.title.slice(0, 20)}
                    </h2>

                    <p className="text-gray-600">
                      Net Price: ${item.price}
                    </p>

                    <p className="font-medium">
                      Total: $
                      {(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* quantity */}
                <div className="flex items-center gap-2">
                  <span className="font-bold">
                    {item.qty}
                  </span>

                  <ButtonGroup orientation="vertical">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increaseQty(item.id)}
                    >
                      <FaPlus />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <FaMinus />
                    </Button>
                  </ButtonGroup>
                </div>

                {/* remove */}
                <button
                  className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* ================= RIGHT: SUMMARY ================= */}
          <div className="w-full lg:w-[350px] bg-white shadow-md rounded-xl p-4 h-fit sticky top-5">

            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>
               <div className="flex justify-between mb-2">
              <span>Total items</span>
              <span>{clickitem.length}</span>
            </div>
            {/* subtotal */}
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* delivery */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Delivery
              </label>
              <select
                className="w-full border p-2 rounded"
                onChange={(e) =>
                  setDelivery(Number(e.target.value))
                }
              >
                <option value={2}>Inside Dhaka - $2</option>
                <option value={5}>Outside Dhaka - $5</option>
              </select>
            </div>

            {/* total */}
            <div className="flex justify-between border-t pt-3 mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* payment */}
            <div className="flex flex-col gap-3">
              <PaymentDropdown />
              <div className="flex">
                <input type="checkbox" 
                checked={isChecked}
                onChange={(e)=>setisChecked(e.target.checked)}
                
                /> <span className="p-1">I agree with <span className="text-blue-600">Turms and Condition</span>.</span>
              </div>
              {isChecked && (
              
                <PaymentDialog />
            
            )}
              
              
            </div>
          </div>

        </div>
      )}
    </div>
  );
}













































// "use client";

// import {
//   ButtonGroup,
// } from "@/components/ui/button-group";
// import { Button } from "@/components/ui/button";

// import { useContext, useState } from "react";
// import { CartContext } from "../component/context/CartContext";
// import { FaPlus, FaMinus } from "react-icons/fa";

// import { PaymentDropdown } from "../../components/ui/PaymentDropdown";
// import { PaymentDialog } from "./payment";

// export default function CartPage() {
//   const { cart, removeFromCart, UpdateQty } = useContext(CartContext);
//   const [isChecked, setisChecked]=useState(false);

//   // selected items
//   const [clickitem, setClickItem] = useState([]);

//   // delivery charge
//   const [delivery, setDelivery] = useState(2);

//   // single select
//   const handleselect = (id) => {
//     setClickItem((prev) =>
//       prev.includes(id)
//         ? prev.filter((item) => item !== id)
//         : [...prev, id]
//     );
//   };

//   // select all
//   const handleSelectAll = () => {
//     if (clickitem.length === cart.length) {
//       setClickItem([]);
//     } else {
//       setClickItem(cart.map((item) => item.id));
//     }
//   };

//   // total only selected
//   const subtotal = cart.reduce((sum, item) => {
//     if (clickitem.includes(item.id)) {
//       return sum + item.price * item.qty;
//     }
//     return sum;
//   }, 0);

//   const total = subtotal + delivery;

//   return (
//     <div className="p-4 sm:p-6 max-w-6xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         Your Cart 🛒
//       </h1>

//       {cart.length === 0 ? (
//         <div className="text-center">
//           <h1 className="text-center text-2xl text-gray-500">
//           No items in cart
//         </h1>
//         <p className="text-gray-500">Your all Favourite Items are available <span className="text-blue-500 "><a href="/products">here...</a></span></p>
//         </div>
        
//       ) : (
//         <div className="flex flex-col bg-gray-300 p-10 rounded-2xl lg:flex-row gap-6">

//           {/* ================= LEFT: CART LIST ================= */}
//           <div className="flex-1 bg-amber-100 p-5 rounded-2xl flex flex-col gap-4">

//             {/* SELECT ALL */}
//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 className="cursor-pointer"
//                 checked={
//                   clickitem.length === cart.length && cart.length > 0
//                 }
//                 onChange={handleSelectAll}
//               />
//               <span>Select All</span>
//             </div>

//             {/* CART ITEMS */}
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 bg-white shadow-md rounded-xl border"
//               >
//                 {/* checkbox */}
//                 <input
//                   type="checkbox"
//                   className="cursor-pointer"
//                   checked={clickitem.includes(item.id)}
//                   onChange={() => handleselect(item.id)}
//                 />

//                 {/* product info */}
//                 <div className="flex items-center gap-4 w-full">
//                   <img
//                     className="w-16 h-16 hover:w-full hover:h-full object-cover rounded"
//                     src={item.image}
//                     alt=""
//                   />

//                   <div>
//                     <h2 className="font-semibold">
//                       {item.title.slice(0, 20)}
//                     </h2>

//                     <p className="text-gray-600">
//                       Price: ${item.price}
//                     </p>

//                     <p className="font-medium">
//                       Total: $
//                       {(item.price * item.qty).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>

//                 {/* quantity */}
//                 <div className="flex items-center gap-2">
//                   <span className="font-bold">
//                     {item.qty}
//                   </span>

//                   <ButtonGroup orientation="vertical">
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => UpdateQty(item.id, "inc")}
//                     >
//                       <FaPlus />
//                     </Button>

//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => UpdateQty(item.id, "dec")}
//                     >
//                       <FaMinus />
//                     </Button>
//                   </ButtonGroup>
//                 </div>

//                 {/* remove */}
//                 <button
//                   className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* ================= RIGHT: SUMMARY ================= */}
//           <div className="w-full lg:w-[350px] bg-white shadow-md rounded-xl p-4 h-fit sticky top-5">

//             <h2 className="text-lg font-semibold mb-4">
//               Order Summary
//             </h2>

//             {/* subtotal */}
//             <div className="flex justify-between mb-2">
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>

//             {/* delivery */}
//             <div className="mb-4">
//               <label className="block mb-1 font-medium">
//                 Delivery
//               </label>
//               <select
//                 className="w-full border p-2 rounded"
//                 onChange={(e) =>
//                   setDelivery(Number(e.target.value))
//                 }
//               >
//                 <option value={2}>Inside Dhaka - $2</option>
//                 <option value={5}>Outside Dhaka - $5</option>
//               </select>
//             </div>

//             {/* total */}
//             <div className="flex justify-between border-t pt-3 mb-4">
//               <span className="font-semibold">Total</span>
//               <span className="font-bold text-green-600">
//                 ${total.toFixed(2)}
//               </span>
//             </div>

//             {/* payment */}
//             <div className="flex flex-col gap-3">
//               <PaymentDropdown />
//               <div className="flex">
//                 <input type="checkbox" 
//                 checked={isChecked}
//                 onChange={(e)=>setisChecked(e.target.checked)}
                
//                 /> <span className="p-1">I agree with <span className="text-blue-600">Turms and Condition</span>.</span>
//               </div>
//               {isChecked && (
              
//                 <PaymentDialog />
            
//             )}
              
              
//             </div>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }