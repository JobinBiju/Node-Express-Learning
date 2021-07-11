import express from 'express';

const app = express();

app.use(express.urlencoded());

app.use('/add-product', (req, res, next) => {
  console.log('Just another middleware ');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>',
  );
});
app.use('/product', (req, res, next) => {
  console.log(req.body['title']);
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  console.log('Just another middleware');
  res.send('<h1>Hello from express</h1>');
});

app.listen(3000);
