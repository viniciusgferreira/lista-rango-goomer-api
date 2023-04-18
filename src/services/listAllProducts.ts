import { sequelize } from '../models/Database.js';

export async function listAllProducts() {
  try {
    const [results] = await sequelize.query('SELECT * FROM "Product";');
    return results;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return error.message;
    }
  }
}
