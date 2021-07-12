import express from 'express';

import * as adminRoutes from './routes/admin.js';
import * as shopRoutes from './routes/shop.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes.default);
app.use(shopRoutes.default);

app.listen(port);
