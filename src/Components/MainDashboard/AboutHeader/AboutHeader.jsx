import React, { useState } from "react";
import "./AboutHeader.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useFirebaseUser } from "../../../config/FirebaseContext";
import { auth } from "../../../config/FirebaseConfig";

const AboutHeader = () => {
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

  return (
    <section className="a-wrapper back">
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
          <div className="h-two-about">
            <div className="h-two-zero3">
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

        <div className="h-about">
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

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
    </section>
  );
};

export default AboutHeader;
