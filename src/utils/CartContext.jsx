import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartItems((prevItems) => ({
      ...prevItems,
      [product.id]: {
        ...product,
        count: (prevItems[product.id]?.count || 0) + 1,
      },
    }));
  };

  const increaseCounter = (id) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        count: (prevItems[id]?.count || 1) + 1,
      },
    }));
  };

  const decreaseCounter = (id) => {
    setCartItems((prevItems) => {
      const item = prevItems[id];
      if (!item || item.count <= 1) return prevItems;
      return {
        ...prevItems,
        [id]: {
          ...item,
          count: item.count - 1,
        },
      };
    });
  };

  const deleteTask = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[id];
      return updatedItems;
    });

    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        addToCart,
        increaseCounter,
        decreaseCounter,
        deleteTask,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     setCartItems((prevItems) => ({
//       ...prevItems,
//       [product.id]: {
//         ...product,
//         count: (prevItems[product.id]?.count || 0) + 1,
//       },
//     }));
//   };

//   // Function to increase item count
//   const increaseCounter = (id) => {
//     setCartItems((prevItems) => ({
//       ...prevItems,
//       [id]: {
//         ...prevItems[id],
//         count: (prevItems[id]?.count || 1) + 1,
//       },
//     }));
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, cartItems, addToCart, increaseCounter }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
