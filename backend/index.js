const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for requests from the frontend
app.use(cors());

// Environment variables
const PORT = process.env.PORT || 5000;
const GIANT_BOMB_API_KEY = process.env.GIANT_BOMB_API_KEY;
const GIANT_BOMB_API_BASE_URL = 'https://www.giantbomb.com/api';

// Endpoint to search games
app.get('/api/search', async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const response = await axios.get(`${GIANT_BOMB_API_BASE_URL}/search/`, {
      params: {
        api_key: GIANT_BOMB_API_KEY,
        format: 'json',
        query: searchTerm,
        resources: 'game',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Giant Bomb API:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
