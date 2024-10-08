import React, { useContext, useState } from "react";
import "./MenuHeader.css";
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

const MenuHeader = () => {
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

  //Loading state for path navigations
  const handlePathNavigation = (path) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 2000);
  };

  // handle page refresh onclick of logo
  const handlePageRefresh = () => {
    window.location.reload;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="menuHeader-wrapper back">
      <div className={`inner-h ${isOpen ? "menu-open" : ""}`}>
        <div className="h-one">
          <Link to="/main" onClick={handlePageRefresh}>
            <img src="./item7go.png" alt="" />
          </Link>
        </div>

        <div onClick={toggleMenu} className="icon-menu">
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {isOpen && (
          <div className="h-two-menu">
            <div className="h-two-zero2">
              <Link
                className="custom-link"
                onClick={() => handlePathNavigation("/main")}
              >
                HOME
              </Link>
              <Link
                className="custom-link"
                onClick={() => handlePathNavigation("/menupage")}
              >
                MENU
              </Link>
              <Link
                className="custom-link"
                onClick={() => handlePathNavigation("/about")}
              >
                ABOUT
              </Link>
              <Link
                className="custom-link"
                onClick={() => handlePathNavigation("/book")}
              >
                BOOK TABLE
              </Link>
            </div>
            <div className="h-three-zero">
              <div className="icon-div">
                <Link to="/profile">
                  <FaUser size={17} color="#000" className="icon" />
                </Link>
                <Link onClick={() => handlePathNavigation("/cart")}>
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

        <div className="h-menu">
          <Link
            className="custom-link"
            onClick={() => handlePathNavigation("/main")}
          >
            HOME
          </Link>
          <Link
            className="custom-link"
            onClick={() => handlePathNavigation("/menupage")}
          >
            MENU
          </Link>
          <Link
            className="custom-link"
            onClick={() => handlePathNavigation("/about")}
          >
            ABOUT
          </Link>
          <Link
            className="custom-link"
            onClick={() => handlePathNavigation("/book")}
          >
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

export default MenuHeader;
