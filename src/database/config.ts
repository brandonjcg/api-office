import { Sequelize } from 'sequelize';

const dotenv = require('dotenv');

dotenv.config();

const database = process.env.DB_NAME ?? '';
const user = process.env.DB_USER ?? '';
const password = process.env.DB_PASSWORD ?? '';
const host = process.env.DB_HOST ?? '';
const port = process.env.DB_PORT ?? '';

const connection = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  port: Number(port),
});

export default connection;
