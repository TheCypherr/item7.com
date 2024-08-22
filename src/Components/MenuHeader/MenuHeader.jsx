import React, { useState } from "react";
import "./MenuHeader.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const MenuHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="menuHeader-wrapper back">
      <div className={`inner-h ${isOpen ? "menu-open" : ""}`}>
        <div className="h-one">
          <Link to="/">
            <img src="./item7go.png" alt="" />
          </Link>
        </div>

        <div onClick={toggleMenu} className="icon-menu">
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {isOpen && (
          <div className="h-two-menu">
            <div className="h-two-zero2">
              <Link to="/" className="custom-link">
                HOME
              </Link>
              <Link to="/menupage" className="custom-link">
                MENU
              </Link>
              <Link to="/about" className="custom-link">
                ABOUT
              </Link>
              <Link to="/book" className="custom-link">
                BOOK TABLE
              </Link>
            </div>
            <div className="h-three-zero">
              <div className="icon-div">
                <FaUser size={17} color="#000" className="icon" />
                <Link to="/cart">
                  <FaShoppingCart size={17} color="#000" className="icon" />
                </Link>
                <FaSearch size={17} color="#000" className="icon" />
              </div>
              <div className="order">
                <Link to="/cart" className="cart-link">
                  <button className="btn">View Cart</button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="h-menu">
          <Link to="/" className="custom-link">
            HOME
          </Link>
          <Link to="/menupage" className="custom-link">
            MENU
          </Link>
          <Link to="/about" className="custom-link">
            ABOUT
          </Link>
          <Link to="/book" className="custom-link">
            BOOK TABLE
          </Link>
        </div>
        <div className="h-three">
          <FaUser size={17} color="#000" className="icon" />
          <Link to="/cart">
            <FaShoppingCart size={17} color="#000" className="icon" />
          </Link>
          <FaSearch size={17} color="#000" className="icon" />
          <Link to="/cart" className="cart-link">
            <button className="btn">View Cart</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuHeader;
