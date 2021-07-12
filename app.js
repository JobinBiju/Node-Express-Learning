import express from 'express';

import * as adminRoutes from './routes/admin.js';
import * as shopRoutes from './routes/shop.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoutes.default);
app.use(shopRoutes.default);

app.use((req, res, next) => {
  res.status(404).send('<H1>Page not found</H1>');
});

app.listen(port);
