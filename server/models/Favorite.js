const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Favorite = sequelize.define('Favorite', {
  favorite_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Favorite;