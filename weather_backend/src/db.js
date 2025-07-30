require('dotenv').config();
const { Sequelize } = require('sequelize');

/**
 * DATABASE CONFIGURATION
 * Reads credentials from environment variables.
 * REQUIRED ENVIRONMENT VARIABLES:
 *  - DB_HOST: Database host (e.g., localhost)
 *  - DB_PORT: Database port (default PostgreSQL: 5432)
 *  - DB_NAME: Database name
 *  - DB_USER: Database user
 *  - DB_PASSWORD: Database password
 * 
 * Example .env entries:
 *   DB_HOST=localhost
 *   DB_PORT=5432
 *   DB_NAME=weather_db
 *   DB_USER=weather_user
 *   DB_PASSWORD=changeme
 */

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false
  }
);

// PUBLIC_INTERFACE
async function testConnection() {
  /** Tests the database connection. */
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('Database connection has been established successfully.');
    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}

module.exports = {
  sequelize,
  testConnection
};
