const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock_summary', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    stockNo: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    salesNo: {
      type: DataTypes.STRING(13),
      allowNull: true,
      comment: "关联的订单编号"
    },
    supNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "供应商编号"
    },
    goodsGroup: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
      comment: "商品组"
    },
    stockCountSum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "数量汇总"
    },
    stockMoneySum: {
      type: DataTypes.FLOAT(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "进货金额汇总"
    },
    stockAddTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    stockState: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'stock_summary',
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
    ]
  });
};
