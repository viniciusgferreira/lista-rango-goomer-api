import { DataTypes } from 'sequelize';
import { sequelize } from './Database.js';
import { Product } from './Product.js';

export const Restaurant = sequelize.define('Restaurant', {
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
  adress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  workingSchedule: {
    type: DataTypes.ARRAY(DataTypes.STRING) // workingSchedule[0] = Sunday open time, close time (08:00-20:00)
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  }
}, {
  // Other model options go here
  freezeTableName: true
});

await Restaurant.sync({ alter: true });
