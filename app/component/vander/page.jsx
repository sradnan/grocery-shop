"use client";

import { useState } from "react";

export default function BeVander() {
  // ------------------ VENDORS ------------------
  const [vendors, setVendors] = useState([
    { id: 1, name: "HomeStyle", shop: "HomeStyle Decor" },
  ]);

  // ------------------ PRODUCTS ------------------
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Modern Wall Clock",
      price: 1200,
      vendorId: 1,
    },
  ]);

  // ------------------ CART & WISHLIST ------------------
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ------------------ AUTH ------------------
  const [loggedVendor, setLoggedVendor] = useState(null);

  // ------------------ VENDOR REGISTER ------------------
  const [vendorForm, setVendorForm] = useState({
    name: "",
    shop: "",
  });

  const handleVendorRegister = () => {
    if (!vendorForm.name || !vendorForm.shop)
      return alert("Fill all fields");

    const newVendor = {
      id: Date.now(),
      name: vendorForm.name,
      shop: vendorForm.shop,
    };

    setVendors((prev) => [...prev, newVendor]);
    setVendorForm({ name: "", shop: "" });
  };

  // ------------------ VENDOR LOGIN ------------------
  const handleVendorLogin = (id) => {
    const found = vendors.find((v) => v.id === id);

    if (!found) return alert("Vendor not found");

    setLoggedVendor(found);
  };

  // ------------------ ADD PRODUCT ------------------
  const [productForm, setProductForm] = useState({
    title: "",
    price: "",
  });

  const handleAddProduct = () => {
    if (!loggedVendor) return alert("Login first");
    if (!productForm.title || !productForm.price)
      return alert("Fill product data");

    const newProduct = {
      id: Date.now(),
      title: productForm.title,
      price: Number(productForm.price),
      vendorId: loggedVendor.id,
    };

    setProducts((prev) => [...prev, newProduct]);
    setProductForm({ title: "", price: "" });
  };

  // ------------------ CART ------------------
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // ------------------ WISHLIST ------------------
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // ------------------ VENDOR PRODUCTS FILTER ------------------
  const vendorProducts = loggedVendor
    ? products.filter((p) => p.vendorId === loggedVendor.id)
    : [];

  // ------------------ UI ------------------
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Mini Marketplace (Vendor System)</h1>

      {/* ---------------- REGISTER ---------------- */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-2">Vendor Register</h2>

        <input
          placeholder="Name"
          value={vendorForm.name}
          onChange={(e) =>
            setVendorForm({ ...vendorForm, name: e.target.value })
          }
          className="border p-1 mr-2"
        />

        <input
          placeholder="Shop"
          value={vendorForm.shop}
          onChange={(e) =>
            setVendorForm({ ...vendorForm, shop: e.target.value })
          }
          className="border p-1 mr-2"
        />

        <button
          onClick={handleVendorRegister}
          className="bg-blue-500 text-white px-3 py-1"
        >
          Register
        </button>
      </div>

      {/* ---------------- LOGIN ---------------- */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-2">Vendor Login</h2>

        {vendors.map((v) => (
          <button
            key={v.id}
            onClick={() => handleVendorLogin(v.id)}
            className="mr-2 bg-gray-200 px-2 py-1"
          >
            {v.shop}
          </button>
        ))}
      </div>

      {/* ---------------- DASHBOARD ---------------- */}
      {loggedVendor && (
        <div className="border p-4 rounded">
          <h2 className="font-semibold">
            Dashboard ({loggedVendor.shop})
          </h2>

          <input
            placeholder="Product Title"
            value={productForm.title}
            onChange={(e) =>
              setProductForm({ ...productForm, title: e.target.value })
            }
            className="border p-1 mr-2"
          />

          <input
            placeholder="Price"
            value={productForm.price}
            onChange={(e) =>
              setProductForm({ ...productForm, price: e.target.value })
            }
            className="border p-1 mr-2"
          />

          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-3 py-1"
          >
            Add Product
          </button>

          <div className="mt-3">
            <h3 className="font-medium">My Products</h3>

            {vendorProducts.map((p) => (
              <p key={p.id}>
                {p.title} - ৳{p.price}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- ALL PRODUCTS ---------------- */}
      <div className="border p-4 rounded">
        <h2 className="font-semibold mb-2">All Products</h2>

        {products.map((p) => {
          const vendor = vendors.find((v) => v.id === p.vendorId);
          const isWish = wishlist.find((w) => w.id === p.id);

          return (
            <div
              key={p.id}
              className="border p-2 my-2 flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">{p.title}</h3>
                <p>৳{p.price}</p>
                <p className="text-sm text-gray-500">
                  Sold by: {vendor?.shop}
                </p>
              </div>

              <div className="space-x-2">
                <button
                  onClick={() => addToCart(p)}
                  className="bg-blue-400 text-white px-2"
                >
                  Cart
                </button>

                <button
                  onClick={() => toggleWishlist(p)}
                  className={`px-2 ${
                    isWish ? "bg-red-500 text-white" : "bg-gray-300"
                  }`}
                >
                  ❤️
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ---------------- SUMMARY ---------------- */}
      <div className="border p-4 rounded">
        <p>Cart Items: {cart.length}</p>
        <p>Wishlist Items: {wishlist.length}</p>
      </div>
    </div>
  );
}