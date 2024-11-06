const express = require('express');
const { getBananaData } = require('./src/BananaAPI.js');
const path = require('path');

const app = express();
const port = 4000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/banana', async (req, res) => {
  const { format = 'json', base64 = 'no' } = req.query;
  const data = await getBananaData(format, base64);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
