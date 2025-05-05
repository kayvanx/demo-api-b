// v 3.3

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// Replace this with your actual JWT secret key
const jwtSecret = 'your-secret-key';

// Middleware function to verify JWT token
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

// Using a regular expression for the endpoint URL
app.put('/api/v2/updatePaymentInfoById/{DYN}', authenticateJWT, (req, res) => {
  const {
    email,
    'first-name': firstName,
    'last-name': lastName,
    'phone-number': phoneNumber,
    'product-code': productCode,
    'quantity-amount': quantityAmount,
    username
  } = req.body;

  // Set the Content-Type header in the response to indicate JSON
  res.set('Content-Type', 'application/json');

  // You can add your logic here to update payment information based on the provided parameters

  res.status(200).json({
    message: 'Received payment update request successfully',
    data: {
      email,
      'first-name': firstName,
      'last-name': lastName,
      'phone-number': phoneNumber,
      'product-code': productCode,
      'quantity-amount': quantityAmount,
      username
    }
  });
});

const port = 8081;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
