import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/MainDashboard/Header/Header";
import Hero from "./Components/MainDashboard/Hero/Hero";
import Menu from "./Components/MainDashboard/Menu/Menu";
import MenuHeader from "./Components/MainDashboard/MenuHeader/MenuHeader";
import MainMenu from "./Components/MainDashboard/MainMenu/MainMenu";
import ScrollToTop from "./Components/ScrollToTop";
import WeAre from "./Components/MainDashboard/WeAre/WeAre";
import Table from "./Components/MainDashboard/Table/Table";
import Footer from "./Components/MainDashboard/Footer/Footer";
import AboutHeader from "./Components/MainDashboard/AboutHeader/AboutHeader";
import TableHeader from "./Components/MainDashboard/TableHeader/TableHeader";
import CartPage from "./Components/MainDashboard/CartPage/CartPage";
import { CartProvider } from "./utils/CartContext";
import CartHeader from "./Components/MainDashboard/CartHeader/CartHeader";
import { SearchProvider } from "./utils/SearchContext";
import Home from "./Components/Dashboard/Home/Home";
import Meals from "./Components/Dashboard/Meals/Meals";
import Faq from "./Components/Dashboard/Faq/Faq";
import Reviews from "./Components/Dashboard/Reviews/Reviews";
import HomeHero from "./Components/Dashboard/HomeHero/HomeHero";
import { ScrollProvider } from "./utils/ScrollContext";
import HomeFooter from "./Components/Dashboard/HomeFooter/HomeFooter";
import Login from "./Components/Dashboard/Login/Login";
import SignUp from "./Components/Dashboard/SignUp/SignUp";
import { FirebaseProvider } from "./config/FirebaseContext";

function App() {
  return (
    <>
      <FirebaseProvider>
        <SearchProvider>
          <CartProvider>
            <ScrollProvider>
              <div className="dashboard">
                <ScrollToTop />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Home />
                        <Faq />
                        <Reviews />
                        <HomeHero />
                        {/* <Meals /> */}
                        <HomeFooter />
                      </>
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <>
                        <Login />
                        <HomeFooter />
                      </>
                    }
                  />
                  <Route
                    path="/signup"
                    element={
                      <>
                        <SignUp />
                        <HomeFooter />
                      </>
                    }
                  />
                </Routes>
              </div>
              <div className="main-dashboard">
                <ScrollToTop />
                <Routes>
                  <Route
                    path="/main"
                    element={
                      <>
                        <Header />
                        <Hero />
                        <Menu />
                        <WeAre />
                        <Table />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="/menupage"
                    element={
                      <>
                        <MenuHeader />
                        <MainMenu />
                        <Hero />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <>
                        <AboutHeader />
                        <WeAre />
                        <Hero />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="/book"
                    element={
                      <>
                        <TableHeader />
                        <Table />
                        <Hero />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <>
                        <CartHeader />
                        <CartPage />
                        <Footer />
                      </>
                    }
                  />
                </Routes>
              </div>
            </ScrollProvider>
          </CartProvider>
        </SearchProvider>
      </FirebaseProvider>
    </>
  );
}

export default App;
