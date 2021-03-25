const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_sales_summary', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    goodsNo: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: 0000
    },
    goodsName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    salesCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    salesMoney: {
      type: DataTypes.FLOAT(24,2),
      allowNull: false,
      defaultValue: 0.00
    },
    goodsPrice: {
      type: DataTypes.FLOAT(20,2),
      allowNull: false,
      defaultValue: 0.00
    },
    stockPrice: {
      type: DataTypes.FLOAT(20,2),
      allowNull: false,
      defaultValue: 0.00
    },
    salesProfit: {
      type: DataTypes.FLOAT(24,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'goods_sales_summary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "goodsNo",
        using: "BTREE",
        fields: [
          { name: "goodsNo" },
          { name: "goodsName" },
        ]
      },
    ]
  });
};
