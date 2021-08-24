const products = [];

export function getAddProduct(req, res, next) {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
}

export function postAddProduct(req, res, next) {
  products.push({ title: req.body.title });
  res.redirect('/');
}
export function getProducts(req, res, next) {
  res.render('shop', {
    prods: products,
    pageTitle: 'My E-Shop',
    path: '/shop',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
}
