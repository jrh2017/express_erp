/*
 * @Author: jiangronghua
 */
var express = require('express');
var router = express.Router();
const employee = require('../controllers/employee')

router.get('/pagination', employee.pagination)

module.exports = router;
