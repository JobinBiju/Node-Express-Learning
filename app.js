import express from 'express';
import path from 'path';

import * as adminRoutes from './routes/admin.js';
import * as shopRoutes from './routes/shop.js';
import * as errorController from './controllers/error.js';

const app = express();
const port = 3000;
global.appRoot = path.resolve();

app.set('view engine', 'ejs'); // setting ejs as default template engine
app.set('views', 'views'); // location to find the views

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(appRoot, 'public')));

app.use('/admin', adminRoutes.router);
app.use(shopRoutes.router);

app.use(errorController.get404page);

app.listen(port);
