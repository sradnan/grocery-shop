"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => {
      // Check if product already exists
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        // Increase quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // Add new product with qty = 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Optional: remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
















































// "use client";
// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     if (typeof window !== "undefined") {
//       const stored = localStorage.getItem("cart");
//       return stored ? JSON.parse(stored) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prev) => [...prev, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };