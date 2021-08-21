import express from 'express';
import path from 'path';

import * as admin from '../routes/admin.js';

const router = express.Router();
router.get('/', (req, res, next) => {
  const product = admin.products;
  res.render('shop', {
    prods: product,
    pageTitle: 'My E-Shop',
    path: '/shop',
    hasProducts: product.length > 0,
    activeShop: true,
    productCSS: true,
  });
  // res.sendFile(path.join(appRoot, 'views', 'shop.html'));
  console.log(admin.products);
});

export { router };
