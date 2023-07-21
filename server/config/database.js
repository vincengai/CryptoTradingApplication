const { Sequelize } = require('sequelize');

// Replace these configuration values with your actual MySQL credentials
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;