const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Wallet = sequelize.define('Wallet', {
  wallet_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.DECIMAL(18, 8),
    defaultValue: 0.0,
  },
});

module.exports = Wallet;