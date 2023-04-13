import { Request, Response } from 'express';
import { listAllRestaurants } from '../services/listAllRestaurants.js';




export async function listRestaurantsController(req: Request, res: Response) {
  const allRestaurants = await listAllRestaurants();
  res.json(allRestaurants);
}
