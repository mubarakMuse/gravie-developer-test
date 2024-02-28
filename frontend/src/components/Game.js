import React from "react";

const Game = ({ game, onAddToCart, onRemoveFromCart, isInCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={game.image.icon_url} alt={game.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{game.name}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {isInCart ? (
          <button 
            onClick={() => onRemoveFromCart(game)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            onClick={() => onAddToCart(game)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Rent & Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Game;
