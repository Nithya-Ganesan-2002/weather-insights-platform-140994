const { sequelize } = require('../db');
const User = require('./user');
const City = require('./city');
const WeatherRecord = require('./weather_record');

// Establish model associations here
City.hasMany(WeatherRecord, { foreignKey: 'cityId' });
WeatherRecord.belongsTo(City, { foreignKey: 'cityId' });

User.hasMany(WeatherRecord, { foreignKey: 'userId' });
WeatherRecord.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  City,
  WeatherRecord
};
