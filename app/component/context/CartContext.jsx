
"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart")) || [];
    }
    return [];
  });

  // ✅ helper function
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // ✅ add
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      let updatedCart;

      if (exist) {
        updatedCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      } else {
        updatedCart = [...prev, { ...product, qty: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  //  remove
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  //  increase
  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updatedCart);
  };

  //  decrease
  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const totalItems = new Set(cart.map(item => item.id)).size;

  //  total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



// "use client"

// import { createContext, useEffect, useState } from "react"
// export const CartContext= createContext();

// export const CartProvider=({children})=>{

//     const[cart, setCart]=useState(()=>{

//         if (typeof window !=="undefined"){
//             return JSON.parse(localStorage.getItem("cart"))||[];
//         }
//         return [];
//     });
    

//     useEffect(()=>{
//         localStorage.setItem("cart",JSON.stringify(cart));
//     },[cart]);

//    const addToCart = (product) => {
//   setCart((prev) => {
//     const exist = prev.find((item) => item.id === product.id);

//     if (exist) {
//       return prev.map((item) =>
//         item.id === product.id
//           ? { ...item, qty: (item.qty || 1) + 1 }
//           : item
//       );
//     }

//     return [...prev, { ...product, qty: 1 }];
//   });
// };

//   const  removeFromCart=(id)=>{
//         setCart((prev)=> prev.filter((item)=> item.id !==id));
//     };


//     const UpdateQty = (id, type) => {
//   setCart((prev) =>
//     prev.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             qty:
//               type === "inc"
//                 ? item.qty + 1
//                 : item.qty > 1
//                 ? item.qty - 1
//                 : 1,
//           }
//         : item
//     )
//   );
// };


// const totalItems = new Set(cart.map(item => item.id)).size;

//     return(

//         <CartContext.Provider value={{cart,addToCart,removeFromCart,UpdateQty, totalItems}}>{children}</CartContext.Provider>
//     )
// }






























