import { DataTypes } from 'sequelize';
import { sequelize } from './Database.js';

const Restaurant = sequelize.define('Restaurant', {
  // Model attributes are defined here
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
    type: DataTypes.DATE
  },
  products: {
    type: DataTypes.ARRAY
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Restaurant === sequelize.models.Restaurant); // true
