"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [tab, setTab] = useState("profile");

  const orders = [
    { id: 1, item: "Rice", price: 50, status: "Delivered" },
    { id: 2, item: "Milk", price: 30, status: "Processing" },
    { id: 3, item: "Eggs", price: 120, status: "Shipped" },
  ];

  const wishlist = [
    { id: 1, name: "Apple", price: 150 },
    { id: 2, name: "Banana", price: 60 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5 space-y-3">

        <h2 className="text-xl font-bold text-green-600 mb-5">
          My Account
        </h2>

        <button
          onClick={() => setTab("profile")}
          className="block w-full text-left p-2 hover:bg-gray-100 rounded"
        >
          👤 Profile
        </button>

        {/* ✅ FIXED: GO TO CART PAGE */}
        <button
          onClick={() => router.push("/cart")}
          className="block w-full text-left p-2 hover:bg-gray-100 rounded"
        >
          🛒 Orders
        </button>

        <button
          onClick={() => setTab("wishlist")}
          className="block w-full text-left p-2 hover:bg-gray-100 rounded"
        >
          ❤️ Wishlist
        </button>

        <button
          onClick={() => setTab("address")}
          className="block w-full text-left p-2 hover:bg-gray-100 rounded"
        >
          📍 Address
        </button>

        <button
          onClick={() => setTab("settings")}
          className="block w-full text-left p-2 hover:bg-gray-100 rounded"
        >
          ⚙️ Settings
        </button>

      </div>

      {/* Content */}
      <div className="flex-1 p-8">

        {tab === "profile" && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Profile Info
            </h2>
          </div>
        )}

      </div>
    </div>
  );
}