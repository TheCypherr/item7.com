import React, { useContext, useState } from "react";
import { CartContext } from "../../../utils/CartContext";
import "./Meals.css";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
  const { foodMenuItems, homeCurrentMenu, handleHomeMenuClick } =
    useContext(CartContext);

  // useState for specific food item
  const [clicked, setClicked] = useState({});

  // useState for selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // onclick function to change style for selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="menu-wrapper">
      <div className="small-menu">
        <h1>Today's Menu</h1>
        <div className="btn">
          <button
            className={
              selectedCategory === "all" ? "activeColor" : "inactiveColor"
            }
            onClick={() => {
              handleHomeMenuClick("all");
              handleCategoryClick("all");
            }}
          >
            All
          </button>
          <button
            className={
              selectedCategory === "rice" ? "activeColor" : "inactiveColor"
            }
            onClick={() => {
              handleHomeMenuClick("rice");
              handleCategoryClick("rice");
            }}
          >
            Rice
          </button>
          <button
            className={
              selectedCategory === "swallow" ? "activeColor" : "inactiveColor"
            }
            onClick={() => {
              handleHomeMenuClick("swallow");
              handleCategoryClick("swallow");
            }}
          >
            Swallow
          </button>
          <button
            className={
              selectedCategory === "burger" ? "activeColor" : "inactiveColor"
            }
            onClick={() => {
              handleHomeMenuClick("burger");
              handleCategoryClick("burger");
            }}
          >
            Burger
          </button>
        </div>
      </div>

      <CartContext.Provider>
        <div className="menu-container menupage">
          {foodMenuItems[homeCurrentMenu].map((food, index) => (
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
                <Link to="/login">
                  <button className="cart-btn">
                    Order Now
                    <FaShoppingCart
                      size={17}
                      color="#000"
                      className="menu-icon"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link to="/login">
          <button className="menu-button">View More</button>
        </Link>
      </CartContext.Provider>
    </section>
  );
};

export default Menu;
