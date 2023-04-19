import { Product } from './Product.js';
import { Restaurant } from './Restaurant.js';


export async function loadModules() {
  Restaurant.hasMany(Product);
  Product.belongsTo(Restaurant);
  await Restaurant.sync({ alter: true });
  await Product.sync({ alter: true });
}
