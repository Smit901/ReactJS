const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();

app.use(cors()); // Use the cors middleware to handle CORS headers

app.get('/get-quote', async (req, res) => {
  try {
    const response = await axios.get('https://api.forismatic.com/api/1.0/', {
      params: {
        method: 'getQuote',
        lang: 'en',
        format: 'json', 
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching quote' });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
