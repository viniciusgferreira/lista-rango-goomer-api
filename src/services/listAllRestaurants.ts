import { sequelize } from '../models/Database.js';

export async function listAllRestaurants() {
  try {
    const [results] = await sequelize.query('SELECT * FROM "Restaurant";');
    return results;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return error.message;
    }
  }
}
