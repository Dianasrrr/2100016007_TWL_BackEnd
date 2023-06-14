// models/productModel.js

const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'db.json');

const getProduct = () => {
  const rawData = fs.readFileSync(dataFilePath, 'utf8');
  const product = JSON.parse(rawData);
  return product;
};

const updateProduct = (updatedProduct) => {
  const rawData = JSON.stringify(updatedProduct);
  fs.writeFileSync(dataFilePath, rawData);
};

const deleteProduct = () => {
  fs.unlinkSync(dataFilePath);
};

module.exports = {
  getProduct,
  updateProduct,
  deleteProduct,
};
