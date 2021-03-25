const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_info', {
    goodsNo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    goodsName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    goodsType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    goodsUnit: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "单位"
    },
    goodsModel: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "型号 ip8"
    },
    goodsSpec: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "规格200X300"
    },
    stockPrice: {
      type: DataTypes.FLOAT(20,2),
      allowNull: false,
      comment: "进价"
    },
    goodsPrice: {
      type: DataTypes.FLOAT(20,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "售价·"
    },
    supName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "产地"
    },
    goodsAddTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "添加时间"
    },
    goodsState: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'goods_info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "goodsNo" },
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
        name: "goodsType",
        using: "BTREE",
        fields: [
          { name: "goodsType" },
        ]
      },
      {
        name: "supName",
        using: "BTREE",
        fields: [
          { name: "supName" },
        ]
      },
    ]
  });
};
