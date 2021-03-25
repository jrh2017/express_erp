const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('types', {
    goodsTypeNo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    goodsType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    typeAddTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    goodsTypeState: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "goodsTypeNo" },
        ]
      },
      {
        name: "goodsType",
        using: "BTREE",
        fields: [
          { name: "goodsType" },
        ]
      },
    ]
  });
};
