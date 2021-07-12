import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Just another middleware');
  res.send('<h1>Hello from express</h1>');
});

export default router;
