import React, { useState, useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { signOut } from "firebase/auth";
import { useFirebaseUser } from "../../../config/FirebaseContext";
import { auth } from "../../../config/FirebaseConfig";

const Header = () => {
  // user info from google signin to use for display name here
  const { user } = useFirebaseUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };

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
      <div className="dark-overlay"></div>
      <div className={`inner-h ${isOpen ? "menu-open" : ""}`}>
        <div className="h-one">
          <Link to="/main">
            <img src="./item7go.png" alt="" />
          </Link>
        </div>
        <div onClick={toggleMenu} className="icon-menu">
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {isOpen && (
          <div className="h-two-main">
            <div className="h-two-zero">
              <Link to="/main" className="custom-link">
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
                <Link to="/profile">
                  <FaUser size={17} color="#000" className="icon" />
                </Link>
                <Link to="/cart">
                  <FaShoppingCart size={17} color="#000" className="icon" />
                </Link>
                <Link className="logout" onClick={handleLogout}>
                  <p>Logout</p>
                  <FaSignOutAlt size={17} color="#000" className="icon" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="h-two">
          <Link to="/main" className="custom-link">
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
          <Link to="/profile">
            <FaUser size={17} color="#000" className="icon" />
          </Link>
          <Link to="/cart">
            <FaShoppingCart size={17} color="#000" className="icon" />
          </Link>
          <Link className="logout" onClick={handleLogout}>
            <p>Logout</p>
            <FaSignOutAlt size={17} color="#000" className="icon" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="slider">
        <h1 className="user-display">
          {user ? `Hi ${user.displayName} 👋` : ""}
        </h1>
        <Slider {...settings}>
          <div className="hero">
            <h1>
              Order your favorite combo. <br /> Make you jolly!
            </h1>
            <p>
              There's a viriety of hot meals available for you to add to cart
              and checkout. Our riders are on standby!
            </p>
            <Link to="/menupage">
              <button className="btn2">Order Now</button>
            </Link>
          </div>

          <div className="hero">
            <h1>
              Thinking of a drink <br /> To pair your meal with?
            </h1>
            <p>
              Worry less! There's a whole lot of different soft drinks, wine and
              even youghurt to pair with your meal.
            </p>
            <Link to="/menupage">
              <button className="btn2">Order Now</button>
            </Link>
          </div>

          <div className="hero">
            <h1>
              Chop your money! <br /> Na you work for am.
            </h1>
            <p>
              Every hard and committed worker deserve to enjoy. Add your
              favorite combo to cart and use the promo-code to get a 20%
              discount.
            </p>
            <Link to="/menupage">
              <button className="btn2">Order Now</button>
            </Link>
          </div>
        </Slider>
      </div>

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
    </section>
  );
};

export default Header;
