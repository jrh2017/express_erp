/*
 * @Author: jiangronghua
 */
var db = require('../models')
const AdminInfo = db.admin_info

const Employee = {
    pagination(req, res) {
        AdminInfo.findAll().then(result => {
            res.ok(result)
        });
    }
}

module.exports = Employee
