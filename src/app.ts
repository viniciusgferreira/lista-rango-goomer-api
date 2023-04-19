import express from 'express';
import { router } from './routes/router.js';
import { loadModules } from './models/index.js';
//import { Restaurant } from './models/Restaurant.js';

export const app = express();
app.use(express.json());
app.use('/api/v1/', router);

await loadModules();
