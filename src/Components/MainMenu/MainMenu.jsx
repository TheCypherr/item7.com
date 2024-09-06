import React, { useContext, useState } from "react";
import { CartContext } from "../../utils/CartContext";
import "./MainMenu.css";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { SearchContext } from "../../utils/SearchContext";

const MainMenu = () => {
  const { cart, addToCart, menuItems, currentMenu, handleMenuClick } =
    useContext(CartContext);

  // import searchQuery from SearchContext
  const {
    searchQuery,
    isSearchBarVisible,
    handleSearchIconClick,
    handleSearchQueryChange,
  } = useContext(SearchContext);

  // Filter items based on the search query
  const filteredItems = menuItems[currentMenu].filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // useState for specific food item
  const [clicked, setClicked] = useState({});

  // useState for selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // onclick function to add item to cart
  const handleButtonClick = (food) => {
    addToCart(food);

    // Update the clicked state for this specific food item
    setClicked((prevClicked) => ({
      ...prevClicked,
      [food.name]: true, // Mark this food item as clicked
    }));
  };

  // onclick function to change style for selected category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="menu-wrapper">
      <div className="small-menu">
        <h1>Our Menu</h1>
        <div className="btn">
          <button
            className={
              selectedCategory === "all" ? "activeColor" : "inactiveColor"
            }
            onClick={() => {
              handleMenuClick("all");
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
              handleMenuClick("rice");
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
              handleMenuClick("swallow");
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
              handleMenuClick("burger");
              handleCategoryClick("burger");
            }}
          >
            Burger
          </button>
          {isSearchBarVisible && (
            <input
              type="text"
              className="search-bar"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              placeholder="Search..."
            />
          )}
          <div className="search-icon" onClick={handleSearchIconClick}>
            {isSearchBarVisible ? (
              <FaTimes size={17} color="#000" />
            ) : (
              <FaSearch size={17} color="#000" />
            )}
          </div>
        </div>
      </div>

      <CartContext.Provider value={{ cart, addToCart, clicked, setClicked }}>
        <div className="menu-container menupage">
          {filteredItems.length > 0 ? (
            filteredItems.map((food, index) => (
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
                    className={`cart-btn ${
                      clicked[food.name] ? "clicked" : ""
                    }`}
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
            ))
          ) : (
            <h1>
              No Result! <br />
              Please Make a New Search.
            </h1>
          )}
        </div>
      </CartContext.Provider>
    </section>
  );
};

export default MainMenu;
