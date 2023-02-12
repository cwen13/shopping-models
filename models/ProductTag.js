const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataType.INT,
      primaryKe: true,
      allowNull: false,
      autoIncrement: true
    },
    product_id: {
      type: DataType.INT,
      reference: {
	model: "product",
	key: "id",
	unique: true
      }
    },
    tag_id: {
      type: DataType.INT,
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
