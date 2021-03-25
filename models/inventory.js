const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory', {
    goodsNo: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: 000
    },
    goodsName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    goodsInv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'inventory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "goodsName" },
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
        name: "goodsName",
        using: "BTREE",
        fields: [
          { name: "goodsName" },
        ]
      },
    ]
  });
};
