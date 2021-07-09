const express = require('express');
const router = express.Router()

const employeeController = require('../controllers/employee.controller');

/*
*** Desc: Get all emplyess
*** Method: GET
*/
router.get("/", employeeController.getEmployeeList);

module.exports = router;

