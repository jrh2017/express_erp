const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_info', {
    empNo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      comment: "编号"
    },
    empName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "姓名"
    },
    empAge: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    empPassword: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "员工密码"
    },
    empSex: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "员工性别"
    },
    empBirthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "1900-01-01",
      comment: "生日"
    },
    empIdCard: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "员工身份证"
    },
    empTel: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "员工电话"
    },
    empQQ: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "qq"
    },
    empAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: "员工地址"
    },
    empEntryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "1900-01-01",
      comment: "入职时间"
    },
    empState: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    empWorkImg: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'employee_info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "empNo" },
        ]
      },
    ]
  });
};
