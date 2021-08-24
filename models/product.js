const products = [];
export default class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
export function fetchAll() {
    throw new Error('Function not implemented.');
}

