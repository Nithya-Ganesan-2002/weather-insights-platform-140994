const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

/**
 * User model schema
 * - id: primary key
 * - email: user's email (unique)
 * - password: hashed password
 * - createdAt: timestamp
 * - updatedAt: timestamp
 */
class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  timestamps: true
});

module.exports = User;
