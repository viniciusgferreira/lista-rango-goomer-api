import { DataTypes } from 'sequelize';
import { sequelize } from './Database.js';

export const Product = sequelize.define('Product', {
  // Model attributes are defined here
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
  sale: {
    type: DataTypes.BOOLEAN
  },
  saleDescription: {
    type: DataTypes.STRING
  },
  salePrice: {
    type: DataTypes.DECIMAL(10, 2)
  },
  saleSchedule: {
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
});

