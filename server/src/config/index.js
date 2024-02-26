const dotenvFilePath = process.env.NODE_ENV === 'dev' ? './env/.env.dev' : './env/.env';
require('dotenv').config({ path: dotenvFilePath });

const sequelize = require('./db');

module.exports = {
  sequelize,
};