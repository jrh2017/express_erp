const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    admPassword: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    admAddTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    admEditTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    empPassword: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "0",
      comment: "账号对应的员工编号"
    }
  }, {
    sequelize,
    tableName: 'admin_info',
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
