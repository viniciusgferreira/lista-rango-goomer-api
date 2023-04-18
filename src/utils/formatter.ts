import { Request } from 'express';
import { RestaurantInput } from '../models/Restaurant.js';
import { ProductInput } from '../models/Product.js';

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

export function formatInputProduct(req: Request) {
  const { restaurantId, name, category, price, photo, isOnSale, salePrice, saleDescription, saleSchedule } = req.body;
  const fullSaleSchedule = [`Sun ${saleSchedule.sunday}`, `Mon ${saleSchedule.monday}`, `Tue ${saleSchedule.tuesday}`, `Wed ${saleSchedule.wednesday}`, `Thu ${saleSchedule.thursday}`, `Fri ${saleSchedule.friday}`, `Sat ${saleSchedule.saturday}`];

  const productInput: ProductInput = {
    restaurantId: restaurantId,
    name: name,
    category: category,
    price: price,
    photo: photo,
    isOnSale: isOnSale,
    salePrice: salePrice,
    saleDescription: saleDescription,
    saleSchedule: fullSaleSchedule
  };

  return productInput;
}
