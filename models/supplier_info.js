const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier_info', {
    supNo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    supName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    supLawyer: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "法人"
    },
    supTel: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    supAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    supState: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'supplier_info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "supNo" },
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
