import { RestaurantInput } from '../models/Restaurant.js';

export function validateRestaurant(restaurant: RestaurantInput) {
  if (!restaurant.name || !restaurant.adress || !restaurant.photo || !restaurant.workingSchedule) { return false; }

  // VALIDATE ALL FIELDS
  return true;
}
