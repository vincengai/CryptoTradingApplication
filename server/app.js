const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/User');
const Wallet = require('./models/Wallet');
const Transaction = require('./models/Transaction');
const Favorite = require('./models/Favorite');

const app = express();
app.use(express.json());

// Add your API routes and logic here

// Sync the models with the database
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});