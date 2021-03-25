const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    stockNo: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: "0"
    },
    goodsNo: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: 000
    },
    goodsName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    supName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    stockPrice: {
      type: DataTypes.FLOAT(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    goodsPrice: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    stockCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stockMoney: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'stock',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "supName",
        using: "BTREE",
        fields: [
          { name: "supName" },
        ]
      },
      {
        name: "goodsNo",
        using: "BTREE",
        fields: [
          { name: "goodsNo" },
          { name: "goodsName" },
          { name: "stockPrice" },
          { name: "goodsPrice" },
        ]
      },
      {
        name: "stockNo",
        using: "BTREE",
        fields: [
          { name: "stockNo" },
        ]
      },
      {
        name: "goodsNo_2",
        using: "BTREE",
        fields: [
          { name: "goodsNo" },
          { name: "goodsName" },
          { name: "supName" },
          { name: "stockPrice" },
          { name: "goodsPrice" },
        ]
      },
      {
        name: "goodsName",
        using: "BTREE",
        fields: [
          { name: "goodsName" },
        ]
      },
    ]
  });
};
