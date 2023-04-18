import { sequelize } from '../models/Database.js';

export async function listRestaurantById(id: number) {
  const query = `SELECT * FROM "Restaurant" where id = ${id};`;

  try {
    const [results] = await sequelize.query(query);
    return results;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return error.message;
    }
  }
}
