import React, { useContext, useState } from "react";
import { CartContext } from "../../utils/CartContext";
import "./MainMenu.css";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import foodList from "../../utils/MenuPageData";

const MainMenu = () => {
  const { cart, addToCart } = useContext(CartContext);

  const [clicked, setClicked] = useState({});

  const handleButtonClick = (food) => {
    addToCart(food);

    // Update the clicked state for this specific food item
    setClicked((prevClicked) => ({
      ...prevClicked,
      [food.name]: true, // Mark this food item as clicked
    }));
  };

  return (
    <section className="menu-wrapper">
      <div className="small-menu">
        <h1>Our Menu</h1>
        <div className="btn">
          <button>All</button>
          <button>Rice</button>
          <button>Swallow</button>
          <button>Burger</button>
        </div>
      </div>

      <CartContext.Provider value={{ cart, addToCart, clicked, setClicked }}>
        <div className="menu-container menupage">
          {foodList.map((food, index) => (
            <div key={index} className="main-container">
              <div className="food-container">
                <img src={food.image} alt={food.name} />
              </div>
              <div className="text-container">
                <h2>{food.name}</h2>
                <p>{food.details}</p>
              </div>
              <div className="last-container">
                <div className="price-text">N{food.price},000</div>
                <button
                  className={`cart-btn ${clicked[food.name] ? "clicked" : ""}`}
                  onClick={() => handleButtonClick(food)}
                >
                  {clicked[food.name] ? "Done" : "Add to Cart"}
                  <FaShoppingCart
                    size={17}
                    color="#000"
                    className="menu-icon"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </CartContext.Provider>
    </section>
  );
};

export default MainMenu;
