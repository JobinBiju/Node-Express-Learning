import express from 'express';
import path from 'path';

import * as admin from './routes/admin.js';
import * as shop from './routes/shop.js';

const app = express();
const port = 3000;
global.appRoot = path.resolve();


app.set('view engine', 'ejs'); // setting handlebars as default template engine
app.set('views', 'views'); // location to find the views

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(appRoot, 'public')));

app.use('/admin', admin.router);
app.use(shop.router);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not found' });
});

app.listen(port);
