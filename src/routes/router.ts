import { Router } from 'express';
import { addRestaurantController, listRestaurantsController } from '../controllers/restaurant-controller.js';

export const router = Router();

router.get('/', (req, res) => {
  console.log('Server is ok');
  res.json({ msg: 'Server is ok' });
});

// GET RESTAURANT INFO BY ID
//router.get('/restaurants/:id', listRestaurantById);

// GET RESTAURANTS
router.get('/restaurants', listRestaurantsController);

// ADD RESTAURANT
router.post('/restaurants', addRestaurantController);

// EDIT RESTAURANT INFO
//router.put('/restaurants', editRestaurant);

// DELETE RESTAURANT
//router.delete('/restaurants/:id', removeRestaurant);

