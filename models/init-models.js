var DataTypes = require("sequelize").DataTypes;
var _admin_info = require("./admin_info");
var _employee_info = require("./employee_info");
var _goods_info = require("./goods_info");
var _goods_sales_summary = require("./goods_sales_summary");
var _inventory = require("./inventory");
var _sales = require("./sales");
var _sales_return = require("./sales_return");
var _sales_summary = require("./sales_summary");
var _stock = require("./stock");
var _stock_return = require("./stock_return");
var _stock_summary = require("./stock_summary");
var _supplier_info = require("./supplier_info");
var _types = require("./types");

function initModels(sequelize) {
  var admin_info = _admin_info(sequelize, DataTypes);
  var employee_info = _employee_info(sequelize, DataTypes);
  var goods_info = _goods_info(sequelize, DataTypes);
  var goods_sales_summary = _goods_sales_summary(sequelize, DataTypes);
  var inventory = _inventory(sequelize, DataTypes);
  var sales = _sales(sequelize, DataTypes);
  var sales_return = _sales_return(sequelize, DataTypes);
  var sales_summary = _sales_summary(sequelize, DataTypes);
  var stock = _stock(sequelize, DataTypes);
  var stock_return = _stock_return(sequelize, DataTypes);
  var stock_summary = _stock_summary(sequelize, DataTypes);
  var supplier_info = _supplier_info(sequelize, DataTypes);
  var types = _types(sequelize, DataTypes);


  return {
    admin_info,
    employee_info,
    goods_info,
    goods_sales_summary,
    inventory,
    sales,
    sales_return,
    sales_summary,
    stock,
    stock_return,
    stock_summary,
    supplier_info,
    types,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
