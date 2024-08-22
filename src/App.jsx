import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menu/Menu";
import MenuHeader from "./Components/MenuHeader/MenuHeader";
import MainMenu from "./Components/MainMenu/MainMenu";
import ScrollToTop from "./Components/ScrollToTop";
import WeAre from "./Components/WeAre/WeAre";
import Table from "./Components/Table/Table";
import Footer from "./Components/Footer/Footer";
import AboutHeader from "./Components/AboutHeader/AboutHeader";
import TableHeader from "./Components/TableHeader/TableHeader";
import CartPage from "./Components/CartPage/CartPage";
import { CartProvider } from "./utils/CartContext";
import CartHeader from "./Components/CartHeader/CartHeader";

function App() {
  return (
    <>
      <CartProvider>
        <div>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Menu />
                  <WeAre />
                  <Table />
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
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <CartHeader />
                  <CartPage />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
