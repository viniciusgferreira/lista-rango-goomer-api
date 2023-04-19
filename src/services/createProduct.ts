import { sequelize } from '../models/Database.js';
import { ProductInput } from '../models/Product.js';

export async function createProduct(product: ProductInput) {
  const saleScheduleArrayQuery = product.saleSchedule.join('\',\'');
  const insertQuery = `INSERT INTO "Product" ("id","name","category","price","photo","isOnSale","salePrice","saleDescription","saleSchedule","RestaurantId") VALUES (DEFAULT,'${product.name}','${product.category}','${product.price}','${product.photo}','${product.isOnSale}','${product.salePrice}','${product.saleDescription}',ARRAY ['${saleScheduleArrayQuery}'],'${product.RestaurantId}') RETURNING "id","name","category","price","photo","isOnSale","salePrice","saleDescription","saleSchedule","RestaurantId";`;

  try {
    return await sequelize.query(insertQuery);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return [error.message, 0];
    }
  }
}

