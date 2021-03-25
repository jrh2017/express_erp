const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales_return', {
    returnGoodsNo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    salesNo: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: "0",
      comment: "销售编号"
    },
    goodsNo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    supName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    goodsPrice: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    returnGoodsCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "退货数量"
    },
    returnGoodsMoney: {
      type: DataTypes.FLOAT(8,2),
      allowNull: false,
      defaultValue: 0.00
    },
    returnGoodsReason: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    returnAddTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "退货时间"
    },
    returnState: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'sales_return',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "returnGoodsNo" },
        ]
      },
      {
        name: "salesNo",
        using: "BTREE",
        fields: [
          { name: "salesNo" },
        ]
      },
    ]
  });
};
