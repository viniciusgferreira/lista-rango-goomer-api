import express from 'express';
import { router } from './routes/router.js';
import { sequelize } from './models/Database.js';

export const app = express();
app.use(express.json());
app.use('/api/v1/', router);
sequelize.sync().then((result) => console.log(result));
