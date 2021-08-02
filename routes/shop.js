import express from 'express';
import path from 'path';

import * as admin from '../routes/admin.js';

const router = express.Router();
router.get('/', (req, res, next) => {
  const product = admin.products;
  res.render('shop', { prods: product, docTitle: 'My E-Shop', path: '/shop' });
  // res.sendFile(path.join(appRoot, 'views', 'shop.html'));
  console.log(admin.products);
});

export { router };
