const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataType.INT,
      primaryKe: true,
      allowNull: false,
      autoIncrement: true
    },
    tag_name: {
      type: DataType.STRING,
      allowNull: false
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
