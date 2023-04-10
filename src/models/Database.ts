import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT || 5432;

const DbURI = `postgres://${dbUser}:${dbPassword}@localhost:${dbPort}/${dbName}`;

export const sequelize = new Sequelize(DbURI);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
