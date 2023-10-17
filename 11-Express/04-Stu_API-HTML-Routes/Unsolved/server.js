// TODO: Import express
const express = require('express');
const path = require('path');
const data = require('./terms.json');

// TODO: Initialize app variable
const app = express();
const PORT = 3001;

// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (req, res) => {
  res.json(
    data
  );
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
