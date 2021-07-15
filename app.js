import express from 'express';
import path from 'path';

import * as adminRoutes from './routes/admin.js';
import * as shopRoutes from './routes/shop.js';

const app = express();
const port = 3000;
global.appRoot = path.resolve();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(appRoot, 'public')));

app.use('/admin', adminRoutes.default);
app.use(shopRoutes.default);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(appRoot, 'views', '404.html'));
});

app.listen(port);
