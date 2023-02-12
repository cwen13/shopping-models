// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  forgeinKey: "category_id"
});

// Categories have many Products
Category.hasMany(Products, {
  forgeinKey: "catagory"
});

// Products belongToMany Tags (through ProductTag)
Products.belongToMany(ProductTag, {
  through: Tag,
  unique: false
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: PriductTag,
  unique: false
}

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
