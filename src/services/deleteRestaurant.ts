import { sequelize } from '../models/Database.js';

export async function deleteRestaurant(id: number) {
  const query = `DELETE FROM "Restaurant" WHERE id = ${id}`;
  try {
    const [, metadata] = await sequelize.query(query);
    const queryResult = metadata as Result;
    if (queryResult.rowCount === 0) { throw Error('Restaurant not found'); }
    return [true, ''];
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return [false, error.message];
    }
  }

}

type Result = {
  rowCount: number
}
