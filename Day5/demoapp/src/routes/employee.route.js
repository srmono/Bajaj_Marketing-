const express = require('express');
const router = express.Router()

const employeeController = require('../controllers/employee.controller');

/*
*** Desc: Get all emplyess
*** Method: GET
*/
router.get("/", employeeController.getEmployeeList);

/*
*** Desc: Get Employee By Id
*** Method: GET
*** Args: Emp Id
*/
router.get("/:id", employeeController.getEmployeeByID);

/*
*** Desc: Create Employee
*** Method: POST
*** Body : Req
*/
router.post('/', employeeController.createNewEmployee);

/*
*** Desc: Update Employee By Id
*** Method: PUT
*** Body & Param
*/
router.put('/:id', employeeController.updateEmployee);

/*
*** Desc: Delete Employee By Id
*** Method: DELETE
*** Body & Param
*/
router.delete('/:id', employeeController.deleteEmployee);


module.exports = router;

