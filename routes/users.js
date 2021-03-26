/*
 * @Author: jiangronghua
 */
var express = require('express');
var router = express.Router();
var db = require('../models/index')
const AdminInfo = db.admin_info

/* GET users listing. */
router.get('/', function(req, res, next) {
  AdminInfo.findAll().then(result => {
    res.send(result)
  });
});

module.exports = router;
