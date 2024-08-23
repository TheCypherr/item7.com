import React, { createContext, useState } from "react";
import MenuPageData from "./MenuPageData";
import FoodData from "./FoodData";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState({});
  // useState for selected shipping cost
  const [shippingCost, setShippingCost] = useState(1);

  // MenuPageData import for menuItems & setMenuItems
  const { menuItems, setMenuItems } = MenuPageData();

  // FoodData import for foodMenuItems & setFoodMenuItems
  const { foodMenuItems, setFoodMenuItems } = FoodData();

  // useState for menuShuffle
  const [currentMenu, setCurrentMenu] = useState("all");

  const shuffleMenu = (menu) => {
    setMenuItems((prevMenuItems) => {
      const shuffledMenu = [...prevMenuItems[menu]];
      shuffledMenu.sort(() => Math.random() - 0.5);
      return { ...prevMenuItems, [menu]: shuffledMenu };
    });
  };

  // click function to shufle menu
  const handleMenuClick = (menu) => {
    setCurrentMenu(menu);
    shuffleMenu(menu);
  };

  // useState for homeMenuShuffle
  const [homeCurrentMenu, setHomeCurrentMenu] = useState("all");

  const homeShuffleMenu = (menu) => {
    setFoodMenuItems((prevFoodMenuItems) => {
      const homeShuffledMenu = [...prevFoodMenuItems[menu]];
      homeShuffledMenu.sort(() => Math.random() - 0.5);
      return { ...prevFoodMenuItems, [menu]: homeShuffledMenu };
    });
  };

  // click function to shuffle home menu
  const handleHomeMenuClick = (menu) => {
    setHomeCurrentMenu(menu);
    homeShuffleMenu(menu);
  };

  // Function to handle shipping option change
  const handleShippingChange = (event) => {
    const selectedOption = event.target.value;
    let cost = 0;

    if (selectedOption.includes("Standard")) {
      cost = 1;
    } else if (selectedOption.includes("Next day")) {
      cost = 2;
    } else if (selectedOption.includes("Express")) {
      cost = 3;
    }

    setShippingCost(cost);
  };

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

  // Function to calculate foodTotal of all items
  const foodTotal = Object.values(cartItems).reduce(
    (total, item) => total + parseFloat(item.price) * item.count,
    0
  );

  // Function to calculate grandTotal of all items
  const finalTotal = foodTotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        addToCart,
        increaseCounter,
        decreaseCounter,
        deleteTask,
        foodTotal,
        handleShippingChange,
        finalTotal,
        menuItems,
        currentMenu,
        handleMenuClick,
        foodMenuItems,
        homeCurrentMenu,
        handleHomeMenuClick,
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
