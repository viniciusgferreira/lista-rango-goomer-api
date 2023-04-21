import { sequelize } from '../models/Database.js';
import { RestaurantInput } from '../models/Restaurant.js';

export async function updateRestaurant(restaurant: RestaurantInput, id: number) {
  const workingScheduleArrayQuery = restaurant.workingSchedule.join('\',\'');
  const query = `UPDATE "Restaurant" SET name = '${restaurant.name}', adress = '${restaurant.adress}', photo = '${restaurant.photo}', "workingSchedule" = ARRAY ['${workingScheduleArrayQuery}'] WHERE id = ${id} RETURNING "id","name","adress","photo","workingSchedule";`;
  try {
    return await sequelize.query(query);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return [error.message, 0];
    }
  }
}
