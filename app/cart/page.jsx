"use client";

import { useContext } from "react";
import { CartContext } from "../component/context/CartContext";
import { FaPlus ,FaMinus } from "react-icons/fa";

import { PaymentDropdown } from "../../components/ui/PaymentDropdown";
import { PaymentDialog } from "./payment";

export default function CartPage() {
  const { cart, removeFromCart, UpdateQty } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 0),
    0
  );

  

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      
      <h1 className="text-2xl font-bold mb-6 text-center">
        Your Cart 🛒
      </h1>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          No items in cart
        </p>
      ) : (
        <div className="flex flex-col gap-4">

          {/* CART ITEMS */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center m-2 gap-4 p-4 bg-white shadow-md rounded-xl border"
            >

              {/* LEFT INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 w-full">
                <div className=" flex justify-center items-center gap-4">
                  <img className="w-15 h-15 m-2 hover:w-full hover:h-full  rounded " src={item.image} alt="" />
                  <div>
                    <h2 className="font-semibold text-lg truncate">
                  {(item.title).slice(0, 15)}
                </h2>
                 <p className="text-gray-600">
                  Price:{" "}
                  <span className="font-medium">
                    ${item.price}
                  </span>
                </p>
                <h1>Total Price: ${(item.price * item.qty).toFixed(2)} </h1>
                  </div>
                </div>

                {/* QTY CONTROLS */}
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
                    <FaPlus/>
                  </button>
                </div>

              </div>
              

              {/* REMOVE BUTTON */}
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

            <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-xl font-semibold">
              <PaymentDialog />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}