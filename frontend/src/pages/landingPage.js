import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mx-auto text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Game Rental Store</h1>
      <p className="text-xl mb-8">Find and rent your favorite games easily!</p>
      <Link to="/search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Start Searching
      </Link>
    </div>
  );
};

export default LandingPage;
