import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './Database.js';

export interface RestaurantAttributes {
  id: number;
  name: string;
  adress: string;
  photo: string;
  workingSchedule: Array<string>;
}

export type RestaurantInput = Optional<RestaurantAttributes, 'id'>
export type RestaurantOutput = Required<RestaurantAttributes>

export class Restaurant extends Model<RestaurantAttributes, RestaurantInput> implements RestaurantAttributes {
  public id!: number;
  public name!: string;
  public adress!: string;
  public photo!: string;
  public workingSchedule!: Array<string>;

}

Restaurant.init({

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
}, {
  // Other model options go here
  sequelize: sequelize,
  modelName: 'Restaurant',
  freezeTableName: true,
  createdAt: false,
  updatedAt: false

});


/* (async () => {
  await Restaurant.sync({ alter: true });
  console.log('Restaurant model loaded');
})(); */
