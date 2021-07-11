import { createServer } from 'http';

import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In the another middleware');
  
  res.send('<h1>Hello from express</h1>');
});

const server = createServer(app);

server.listen(3000);
