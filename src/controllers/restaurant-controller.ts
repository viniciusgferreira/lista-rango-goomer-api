import { Request, Response } from 'express';
import { listAllRestaurants } from '../services/listAllRestaurants.js';
import { validateRestaurant } from '../utils/validator.js';
import { createRestaurant } from '../services/createRestaurant.js';
import { formatInputRestaurant } from '../utils/formatter.js';
import { listRestaurantById } from '../services/listRestaurantById.js';

export async function listRestaurantsController(req: Request, res: Response) {
  const allRestaurants = await listAllRestaurants();
  res.json(allRestaurants);
}

export async function addRestaurantController(req: Request, res: Response) {
  const restaurant = formatInputRestaurant(req);

  if (!validateRestaurant(restaurant)) { res.status(400).json('invalid input fields'); }

  const result = await createRestaurant(restaurant);
  result?.[1] ? res.status(201).json(result[0]) : res.status(500).send(result?.[0]);
}

export async function listRestaurantByIdController(req: Request, res: Response) {
  const id = Number(req.params.id);

  if (isNaN(id)) { res.status(400).json('id must be a number'); return; }

  const restaurant = await listRestaurantById(id);
  restaurant ? res.json(restaurant) : res.status(404).json(`Restaurant with id ${id} not found`);
}
