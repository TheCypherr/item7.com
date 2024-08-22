import React, { useState } from "react";
import "./Header.css";
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const settings = {
    // dots: false,
    // infinite: true, // Enable infinite looping
    // speed: 500,
    // slidesToShow: 1, // Show one slide at a time
    // slidesToScroll: 1, // Scroll one slide at a time
    // autoplay: true, // Enable autoplay
    // autoplaySpeed: 2000, // Duration of each slide
    // arrows: false, // Hide navigation arrows

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <section className="header-wrapper back">
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
          <div className="h-two-main">
            <div className="h-two-zero">
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

        <div className="h-two">
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

      {/* Hero Section */}
      <div className="slider">
        <Slider {...settings}>
          <div className="hero">
            <h1>
              Fast Food <br /> Restaurant
            </h1>
            <p>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <Link to="/menupage">
              <button className="btn2">Order Now</button>
            </Link>
          </div>

          <div className="hero">
            <h1>
              Fast Food <br /> Restaurant
            </h1>
            <p>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <Link to="/menupage">
              <button className="btn2">Order Now</button>
            </Link>
          </div>

          <div className="hero">
            <h1>
              Fast Food <br /> Restaurant
            </h1>
            <p>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <Link to="/menupage">
              <button className="btn2">Order Now</button>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Header;
