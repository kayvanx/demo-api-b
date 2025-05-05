// v3
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/v2/placeOrder', (req, res) => {
  const {
    'product-code': productCode,
    'quantity-amount': quantityAmount,
    'customer-id': customerId,
    price
  } = req.body;

  // Set the Content-Type header in the response to indicate JSON
  res.set('Content-Type', 'application/json');

  // You can add your logic here to place the order based on the provided parameters
  // For example, you might:
  // - Validate the product code and customer ID
  // - Check if the product is in stock
  // - Calculate the total price
  // - Store the order in a database

  res.status(200).json({
    message: 'Received order request successfully',
    data: {
      'product-code': productCode,
      'quantity-amount': quantityAmount,
      'customer-id': customerId,
      price
    }
  });
});

const port = 3009;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
