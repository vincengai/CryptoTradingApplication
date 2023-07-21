const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
  transaction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  transaction_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Transaction;