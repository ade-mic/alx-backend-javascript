const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the payment system' });
});

const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export the app for testing
