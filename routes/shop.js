import express from 'express';
import path from 'path';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res, next) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'views', 'shop.html'));
});

export default router;
