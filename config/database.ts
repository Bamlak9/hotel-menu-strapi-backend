// config/database.js
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', // Use PostgreSQL for deployment
    // Use environment variable for deployed DB connection
    connection: env.array('DATABASE_URL') 
      ? env.array('DATABASE_URL')[0] 
      : {
          // Fallback to local SQLite database for development
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
    useNullAsDefault: true,
  },
});