const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/images/get', async (req, res) => {
  try {
    const apiUrl = 'http://thecatapi.com/api/images/get?format=src&type=gif';
    const response = await axios.get(apiUrl);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching cat gif:', error);
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
