import express from 'express';
import path from 'path';

import * as admin from './routes/admin.js';
import * as shop from './routes/shop.js';

const app = express();
const port = 3000;
global.appRoot = path.resolve();

app.set();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(appRoot, 'public')));

app.use('/admin', admin.router);
app.use(shop.router);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(appRoot, 'views', '404.html'));
});

app.listen(port);
