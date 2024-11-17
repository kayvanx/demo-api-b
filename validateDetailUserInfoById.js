// version 3.91
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.post('/api/validateDetailUserInfoById', (req, res) => {
  const {
    'quantity-amount': quantityAmount,
    username,
    'credit-card': creditCard,
    'date-of-birth': dateOfBirth,
    'first-name': firstName,
    'last-name': lastName
  } = req.body;

  // Set the Content-Type header in the response to indicate JSON
  res.set('Content-Type', 'application/json');

  // You can add validation logic here if needed

  res.status(200).json({
    message: 'Received user details successfully',
    data: {
      'quantity-amount': quantityAmount,
      username,
      'credit-card': creditCard,
      'date-of-birth': dateOfBirth,
      'first-name': firstName,
      'last-name': lastName
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});