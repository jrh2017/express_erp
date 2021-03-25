const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    salesNo: {
      type: DataTypes.STRING(13),
      allowNull: false,
      comment: "单号"
    },
    goodsNo: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: 000
    },
    goodsName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    goodsPrice: {
      type: DataTypes.FLOAT(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    salesCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    deserveMoney: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "应收金额"
    },
    salesProfit: {
      type: DataTypes.FLOAT(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "利润"
    }
  }, {
    sequelize,
    tableName: 'sales',
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
        name: "goodsNo",
        using: "BTREE",
        fields: [
          { name: "goodsNo" },
          { name: "goodsName" },
        ]
      },
      {
        name: "salesNo",
        using: "BTREE",
        fields: [
          { name: "salesNo" },
        ]
      },
      {
        name: "goodsNo_2",
        using: "BTREE",
        fields: [
          { name: "goodsNo" },
        ]
      },
      {
        name: "goodsName",
        using: "BTREE",
        fields: [
          { name: "goodsName" },
        ]
      },
      {
        name: "salesCount",
        using: "BTREE",
        fields: [
          { name: "salesCount" },
        ]
      },
    ]
  });
};
