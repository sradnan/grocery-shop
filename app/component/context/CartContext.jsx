"use client"

import { createContext, useEffect, useState } from "react"
export const CartContext= createContext();

export const CartProvider=({children})=>{

    const[cart, setCart]=useState(()=>{

        if (typeof window !=="undefined"){
            return JSON.parse(localStorage.getItem("cart"))||[];
        }
        return [];
    });
    
        



    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart]);

   const addToCart = (product) => {
  setCart((prev) => {
    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      );
    }

    return [...prev, { ...product, qty: 1 }];
  });
};

  const  removeFromCart=(id)=>{
        setCart((prev)=> prev.filter((item)=> item.id !==id));
    };


    const UpdateQty = (id, type) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            qty:
              type === "inc"
                ? item.qty + 1
                : item.qty > 1
                ? item.qty - 1
                : 1,
          }
        : item
    )
  );
};


const totalItems = cart.reduce(
      (sum, item) => sum + (item.qty || 0),
      0
    );

    return(

        <CartContext.Provider value={{cart,addToCart,removeFromCart,UpdateQty, totalItems}}>{children}</CartContext.Provider>
    )
}



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

//    const addToCart=(product)=>{
//         setCart((prev)=> [...prev,product]);
//     };

//   const  removeFromCart=(id)=>{
//         setCart((prev)=> prev.filter((item)=> item.id !==id));
//     };


//     const UpdateQty= (id,type)=>{
//         setCart(prev=>
//             prev.map(item=>
//                 item.id === id
//                 ?{
//                     ...item,
//                     qty:type === "inc"? item.qty +1 : item.qty -1,
//                 }
//                 :item
//             )
//         );
//     };

//         const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

//     return(

//         <CartContext.Provider value={{cart,addToCart,removeFromCart,UpdateQty}}>{children}</CartContext.Provider>
//     )
// }



























