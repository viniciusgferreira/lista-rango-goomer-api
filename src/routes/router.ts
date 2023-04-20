import { Router } from 'express';
import { addRestaurantController, editRestaurantController, listRestaurantByIdController, listRestaurantsController } from '../controllers/restaurant-controller.js';
import { addProductController, listProductsController } from '../controllers/product-controller.js';

export const router = Router();

router.get('/', (req, res) => {
  console.log('Server is ok');
  res.json({ msg: 'Server is ok' });
});

// GET RESTAURANT INFO BY ID
router.get('/restaurants/:id', listRestaurantByIdController);

// GET RESTAURANTS
router.get('/restaurants', listRestaurantsController);

// ADD RESTAURANT
router.post('/restaurants', addRestaurantController);

// EDIT RESTAURANT INFO
router.put('/restaurants/:id', editRestaurantController);

// DELETE RESTAURANT
//router.delete('/restaurants/:id', removeRestaurant);


// GET PRODUCTS
router.get('/products', listProductsController);

// ADD PRODUCT
router.post('/products', addProductController);
