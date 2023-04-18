import { sequelize } from '../models/Database.js';
import { RestaurantInput } from '../models/Restaurant.js';

export async function createRestaurant(restaurant: RestaurantInput) {
  const workingScheduleArrayQuery = restaurant.workingSchedule.join('\',\'');
  const insertQuery = `INSERT INTO "Restaurant" ("id","name","adress","photo","workingSchedule") VALUES (DEFAULT,'${restaurant.name}','${restaurant.adress}','${restaurant.photo}', ARRAY ['${workingScheduleArrayQuery}']) RETURNING "id","name","adress","photo","workingSchedule";`;

  try {
    return await sequelize.query(insertQuery);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return [error.message, 0];
    }
  }
}

