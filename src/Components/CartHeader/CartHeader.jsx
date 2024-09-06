import React, { useState } from "react";
import "./CartHeader.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CartHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="a-wrapper back">
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
          <div className="h-two-cart">
            <div className="h-two-zero8">
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
              </div>
              <div className="order">
                <Link to="/cart" className="cart-link">
                  <button className="btn">Cart Opened</button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="h-cart">
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
          <Link to="/cart" className="cart-link">
            <button className="btn">Cart Opened</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartHeader;
