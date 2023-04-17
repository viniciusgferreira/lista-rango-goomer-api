import { Product } from './Product.js';
import { Restaurant } from './Restaurant.js';


export function loadModules() {
  Restaurant.hasMany(Product);
  Product.belongsTo(Restaurant);
}
