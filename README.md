# Gravie Software Engineer Challenge by Mubarak
------

# Game Rental Service

This project is a full-stack web application for a game rental service. It consists of a React-based frontend and a Node.js/Express backend. The application allows users to search for games using the Giant Bomb API, add them to a cart, and view their cart on a checkout page.

## Features

- **Search Games**: Users can search for games using the Giant Bomb API.
- **Add to Cart**: Users can add games to their cart.
- **View Cart**: Users can view the games in their cart on the checkout page.

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

#### Setting Up the Backend

1. **Navigate to the backend directory**

   ```sh
   cd backend
   ```

2. **Install backend dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables for the backend**

   Create a `.env` file in the backend directory and add your Giant Bomb API key:

   ```env
   GIANT_BOMB_API_KEY=your_api_key_here
   ```

4. **Start the backend server**

   ```sh
   node index.js
   ```

   The backend server will start on [http://localhost:5000](http://localhost:5000).

#### Setting Up the Frontend

1. **Navigate to the frontend directory**

   ```sh
   cd frontend
   ```

2. **Install frontend dependencies**

   ```sh
   npm install
   ```

3. **Run the React application**

   ```sh
   npm start
   ```

   The application will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Navigate to the `/search` page to search for games.
- Click on "Add to Cart" to add a game to your cart.
- navigate to the `/checkout` page to view your cart and proceed with the rental process.

.# gravie-developer-test
