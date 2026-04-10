"use client";

import { useContext } from "react";
import { CartContext } from "../component/context/CartContext";
import { PaymentDropdown } from "../../components/ui/PaymentDropdown";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">No items in cart</p>
      ) : (
        <div className="flex flex-col gap-4">

          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 bg-white shadow-md rounded-xl border"
            >
              {/* Left */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 w-full">
                  
                  <h2 className="font-semibold text-lg truncate">
                    {item.title}
                  </h2>

                  <p className="text-gray-600">
                    Price: <span className="font-medium">${item.price}</span>
                  </p>

                  <p className="text-gray-600">
                    Qty: <span className="font-medium">{item.qty}</span>
                  </p>

                </div>


              {/* Right */}
              <button
                className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-4 border-t pt-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-xl font-bold text-green-600">
              ${total.toFixed(2)}
            </p>
          </div>

          {/* Payment + Button */}
          <div className="mt-4 flex flex-col gap-4 items-center sm:items-end">
            <PaymentDropdown />

            <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-xl font-semibold">
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}