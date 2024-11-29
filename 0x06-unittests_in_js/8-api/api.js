const express = require('express');

const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the payment system', statusCode: 200 });
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export the app for testing
