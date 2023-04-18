import { ProductInput } from '../models/Product.js';
import { RestaurantInput } from '../models/Restaurant.js';

export function validateRestaurant(restaurant: RestaurantInput) {
  if (!restaurant.name || !restaurant.adress || !restaurant.photo || !restaurant.workingSchedule) { return false; }

  // VALIDATE ALL FIELDS
  return true;
}
export function validateProduct(product: ProductInput) {
  if (!product.name || !product.restaurantId || !product.photo || !product.category || !product.price || !product.isOnSale || !product.salePrice || !product.saleDescription || !product.saleSchedule) { return false; }

  // VALIDATE ALL FIELDS
  return true;
}
