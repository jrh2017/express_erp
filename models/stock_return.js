const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock_return', {
    returnStockNo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    goodsNo: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: 000
    },
    supName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    goodsPrice: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    returnStockCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    returnStockMoney: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    returnStockReason: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "退货原因"
    },
    returnAddTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "添加时间"
    },
    returnStockState: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'stock_return',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "returnStockNo" },
        ]
      },
      {
        name: "goodsNo",
        using: "BTREE",
        fields: [
          { name: "goodsNo" },
        ]
      },
    ]
  });
};
