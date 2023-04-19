import { Request, Response } from 'express';
import { listAllProducts } from '../services/listAllProducts.js';
import { createProduct } from '../services/createProduct.js';
import { formatInputProduct } from '../utils/formatter.js';
import { validateProduct } from '../utils/validator.js';
import { listRestaurantById } from '../services/listRestaurantById.js';

export async function listProductsController(req: Request, res: Response) {
  const allProducts = await listAllProducts();
  res.json(allProducts);
}

export async function addProductController(req: Request, res: Response) {
  const productInput = formatInputProduct(req);

  if (!validateProduct(productInput)) { res.status(400).json('invalid input fields'); return; }

  const restaurant = await listRestaurantById(productInput.RestaurantId);
  if (!restaurant) { res.status(400).json('RestaurantId does not exist'); return; }

  const result = await createProduct(productInput);
  result?.[1] ? res.status(201).json(result[0]) : res.status(500).send(result?.[0]);
}
