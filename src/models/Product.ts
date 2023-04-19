import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './Database.js';

export interface ProductAttributes {
  id: number;
  name: string;
  category: string;
  price: number;
  photo: string;
  isOnSale: boolean;
  salePrice: number;
  saleDescription: string;
  saleSchedule: string[];
}

export type ProductInput = Optional<ProductAttributes, 'id'> & {
  RestaurantId: number;
}
export type ProductOutput = Required<ProductAttributes>

export class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public category!: string;
  public price!: number;
  public photo!: string;
  public isOnSale!: boolean;
  public salePrice!: number;
  public saleDescription!: string;
  public saleSchedule!: string[];

}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isOnSale: {
    type: DataTypes.BOOLEAN
  },
  saleDescription: {
    type: DataTypes.STRING
  },
  salePrice: {
    type: DataTypes.DECIMAL(10, 2)
  },
  saleSchedule: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  }
}, {
  // Other model options go here
  sequelize: sequelize,
  modelName: 'Product',
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

/* (async () => {
  await Product.sync({ alter: true });
  console.log('Product model loaded');
})();
 */
