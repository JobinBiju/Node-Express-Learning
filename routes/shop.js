import express from 'express';
import path from 'path';

import * as productsController from '../controllers/products.js';

const router = express.Router();
router.get('/', productsController.getProducts);

export { router };
