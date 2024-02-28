import React from "react";
import Game from "../components/Game";

const CheckoutPage = ({ addToCart, removeFromCart, cart, setCart }) => {
  const handleCheckout = () => {
    if (cart.length > 0) {
      console.log("Checkout", cart);
      alert("Checkout successful!");
      setCart([]); 
    } else {
      alert("Your cart is empty.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center">
            {cart.map((game) => (
              <Game
                key={game.id}
                game={game}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
                isInCart={cart.some((item) => item.id === game.id)}
              />
            ))}
          </div>
          <button
            onClick={handleCheckout}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
