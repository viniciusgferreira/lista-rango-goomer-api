import { Request } from 'express';
import { RestaurantInput } from '../models/Restaurant.js';

export function formatInputRestaurant(req: Request) {
  const { name, photo, adress, workingSchedule } = req.body;
  const fullSchedule = [`Sun ${workingSchedule.sunday}`, `Mon ${workingSchedule.monday}`, `Tue ${workingSchedule.tuesday}`, `Wed ${workingSchedule.wednesday}`, `Thu ${workingSchedule.thursday}`, `Fri ${workingSchedule.friday}`, `Sat ${workingSchedule.saturday}`];

  const restaurant: RestaurantInput = {
    'name': name,
    'photo': photo,
    'adress': adress,
    'workingSchedule': fullSchedule
  };
  return restaurant;
}
