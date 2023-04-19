import { sequelize } from '../models/Database.js';
import { Restaurant } from '../models/Restaurant.js';

export async function listRestaurantById(id: number) {
  const query = `SELECT * FROM "Restaurant" where id = ${id};`;

  try {
    const [results] = await sequelize.query(query, { model: Restaurant });
    return results;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return error.message;
    }
  }
}
