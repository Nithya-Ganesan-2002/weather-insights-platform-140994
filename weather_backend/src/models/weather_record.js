const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

/**
 * WeatherRecord model schema
 * - id: primary key
 * - cityId: FK to City
 * - userId: FK to User (optional)
 * - timestamp: weather data timestamp
 * - type: 'current' | 'forecast' | 'historical'
 * - temperature: in Celsius
 * - description: weather description (Cloudy, Sunny, etc.)
 * - data: JSON field for all weather API response data
 */
class WeatherRecord extends Model {}

WeatherRecord.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'Cities', key: 'id' }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: { model: 'Users', key: 'id' }
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('current', 'forecast', 'historical'),
    allowNull: false
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  data: {
    type: DataTypes.JSONB,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'WeatherRecord',
  timestamps: false
});

module.exports = WeatherRecord;
