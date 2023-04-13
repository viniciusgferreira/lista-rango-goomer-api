import { sequelize } from '../models/Database.js';

export async function listAllRestaurants() {
  try {
    const [results] = await sequelize.query('SELECT "id", "name", "adress", "photo", "workingSchedule", "products", "createdAt", "updatedAt" FROM "Restaurant";');
    return results;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return error.message;
    }
  }
}
