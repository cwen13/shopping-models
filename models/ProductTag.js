const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      reference: {
	model: "product",
	key: "id",
	unique: true
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      reference: {
	model: "tag",
	key: "id",
	unique: true
      }
    },
      
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
