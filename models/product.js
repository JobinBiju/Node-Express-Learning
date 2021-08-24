import * as fs from 'fs';
import path from 'path';

global.appRoot = path.resolve();
export default class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(appRoot, 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push({ title: this.title });
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(appRoot, 'data', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
}
