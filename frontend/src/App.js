import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";
import LandingPage from "./pages/landingPage";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((currentCart) => {
      if (!currentCart.some((item) => item.id === game.id)) {
        return [...currentCart, game];
      } else {
        return currentCart;
      }
    });
  };

  const removeFromCart = (game) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== game.id));
  };

  return (
    <Router>
      <nav className="bg-blue-500 p-4 text-white">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="hover:text-blue-200">
              Search
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="hover:text-blue-200">
              Checkout
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/search"
          element={
            <SearchPage
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
