import express from 'express';
import path from 'path';

const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product'});
});
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

export { router, products };
