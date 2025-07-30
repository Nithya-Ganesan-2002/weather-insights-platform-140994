const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

/**
 * City model schema
 * - id: primary key
 * - name: city name
 * - country: country code (e.g., US)
 * - lat: latitude
 * - lon: longitude
 */
class City extends Model {}

City.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  lon: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'City',
  timestamps: false
});

module.exports = City;
