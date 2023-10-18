const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews');
const app = express(); // creates an instance of Express.js. Setting up the foundation for building a web application using Express.js.

// The express.json() function is a built-in middleware function in Express. It parses
// incoming requests with JSON payloads and is based on body-parser. 
// https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

// The express.urlencoded() function is a built-in middleware function in Express. 
// It parses incoming requests with URL-encoded payloads and is based on a body parser.
// https://www.geeksforgeeks.org/express-js-express-urlencoded-function/?ref=lbp
app.use(express.urlencoded({ extended: true })); //"username=Gus&password=dddd"

// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.status(200).json(reviews);
});

// GET request for a single review
app.get('/api/reviews/:review_id', (req, res) => {
  if (req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.status(200).json(currentReview);
        return;
      }
    }
    res.status(404).send('Review not found');
  } else {
    res.status(400).send('Review ID not provided');
  }
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  
  console.info(`${req.method} request received to add a review`); // Log that a POST request was received
  let response; // Prepare a response object to send back to the client

  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: 'success',
      data: req.body,
    };
    res.status(201).json(response);
  } else {
    res.status(400).json('Request body must at least contain a product name');
  }

  console.log(req.body); // Log the response body to the console
});

// POST request to upvote a review
app.post('/api/upvotes/:review_id', (req, res) => {
  if (req.body && req.body.upvote && req.params.review_id) {
    console.info(`${req.method} request received to upvote a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
        res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
        return;
      }
    }
    res.status(404).json('Review ID not found');
  } else {
    res.status(500).json("Provide a req.body or review ID");
  }
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
