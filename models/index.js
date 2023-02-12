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
Category.hasMany(Product, {
  forgeinKey: "catagory"
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: Tag,
  unique: false
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  unique: false
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
