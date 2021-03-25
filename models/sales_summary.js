const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales_summary', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    salesNo: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    salesName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "订单名称"
    },
    stockNo: {
      type: DataTypes.STRING(13),
      allowNull: true,
      comment: "采购单编号"
    },
    goodsGroup: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    reciveMoney: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    changeMoney: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "找零"
    },
    salesCountSum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    salesMoneySum: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    salesProfitSum: {
      type: DataTypes.FLOAT(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    salesAddTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    salesState: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    editor: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "000"
    }
  }, {
    sequelize,
    tableName: 'sales_summary',
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
        name: "editor",
        using: "BTREE",
        fields: [
          { name: "editor" },
        ]
      },
    ]
  });
};
