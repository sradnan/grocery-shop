"use client";

import { useContext, useState } from "react";
import { CartContext } from "../component/context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";

import { PaymentDropdown } from "../../components/ui/PaymentDropdown";
import { PaymentDialog } from "./payment";

export default function CartPage() {
  const { cart, removeFromCart, UpdateQty } = useContext(CartContext);

  //  selected items
  const [clickitem, setClickItem] = useState([]);

  //  single select
const handleselect=(id)=>{
  setClickItem((prev)=> prev.includes(id)
? prev.filter((item)=> item !==id): [...prev,id]
);
};

  // ✅ select all
  const handleSelectAll = () => {
    if (clickitem.length === cart.length) {
      setClickItem([]); // unselect all
    } else {
      setClickItem(cart.map((item) => item.id)); // select all
    }
  };

  // ✅ total only selected
  const total = cart.reduce((sum, item) => {
    if (clickitem.includes(item.id)) {
      return sum + item.price * item.qty;
    }
    return sum;
  }, 0);

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          No items in cart
        </p>
      ) : (
        <div className="flex flex-col gap-4">

          {/*  SELECT ALL */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
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
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center m-2 gap-4 p-4 bg-white shadow-md rounded-xl border"
            >
              {/* ✅ checkbox */}
              <input
                type="checkbox"
                checked={clickitem.includes(item.id)}
                onChange={() => handleselect(item.id)}
              />

              {/* LEFT INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 w-full">
                <div className="flex justify-center items-center gap-4">
                  <img
                    className="w-16 h-16 object-cover hover:w-full hover:h-full rounded hover:scale-110 transition"
                    src={item.image}
                    alt=""
                  />

                  <div>
                    <h2 className="font-semibold text-lg truncate">
                      {item.title.slice(0, 15)}
                    </h2>

                    <p className="text-gray-600">
                      Price:{" "}
                      <span className="font-medium">
                        ${item.price}
                      </span>
                    </p>

                    <h1>
                      Total Price: $
                      {(item.price * item.qty).toFixed(2)}
                    </h1>
                  </div>
                </div>

                {/* QTY */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => UpdateQty(item.id, "dec")}
                    className="px-2 bg-gray-200 rounded"
                  >
                    <FaMinus />
                  </button>

                  <span className="font-medium">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => UpdateQty(item.id, "inc")}
                    className="px-2 bg-gray-200 rounded"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* REMOVE */}
              <button
                className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <div className="flex justify-between items-center mt-4 border-t pt-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-xl font-bold text-green-600">
              ${total.toFixed(2)}
            </p>
          </div>

          {/* PAYMENT */}
          <div className="mt-4 flex flex-col gap-4 items-center sm:items-end">
            <PaymentDropdown />

            {/* ❗ button er moddhe na */}
            <PaymentDialog />
          </div>
        </div>
      )}
    </div>
  );
}