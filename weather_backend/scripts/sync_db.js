require('dotenv').config();
const { sequelize } = require('../src/db');
const { User, City, WeatherRecord } = require('../src/models');

// PUBLIC_INTERFACE
async function syncDatabase(force = false) {
  /**
   * Syncs all defined models into the DB, creating necessary tables.
   * Set force = true to DROP all tables and recreate (DANGER!).
   */
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('Connected to DB.');
    await sequelize.sync({ force });
    // eslint-disable-next-line no-console
    console.log('Tables synced successfully.');
    process.exit(0);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to sync DB:', err);
    process.exit(1);
  }
}

const forceReset = process.argv.includes('--force');
syncDatabase(forceReset);
