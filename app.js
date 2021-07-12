import express from 'express';
import path from 'path';

import * as adminRoutes from './routes/admin.js';
import * as shopRoutes from './routes/shop.js';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoutes.default);
app.use(shopRoutes.default);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'));
});

app.listen(port);
