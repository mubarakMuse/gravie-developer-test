// src/components/SearchPage.js
import React, { useState } from 'react';
import Game from '../components/Game';

const SearchPage = ({ addToCart, removeFromCart, cart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([]); // State to store the games

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/search?searchTerm=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      console.log(searchTerm,data)
      setGames(data.results);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-4">
        <input 
          type="text"
          placeholder="Search for games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        <button 
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
          >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {games.map(game => (
          <Game 
          key={game.id} 
          game={game} 
          onAddToCart={addToCart} 
          onRemoveFromCart={removeFromCart}
          isInCart={cart.some(item => item.id === game.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;