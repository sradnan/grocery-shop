"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      
      {/* 🔰 Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-600">Contact Us</h1>
        <p className="text-gray-500 mt-2">
          We'd love to hear from you! Reach out anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* 📍 Left Side Info */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
          
          <h2 className="text-xl font-semibold text-gray-700">
            Get in Touch
          </h2>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <p className="text-gray-600">
              Kaliganj, Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-600 text-xl" />
            <p className="text-gray-600">+880 1812-295539</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-green-600 text-xl" />
            <p className="text-gray-600">support@groceryshop.com</p>
          </div>

          {/* Optional Image */}
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="grocery"
            className="rounded-lg mt-4"
          />
        </div>

        {/* 📝 Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Send Message
          </h2>

          <form className="space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}