const EmployeeModel = require('../models/employee.model');

// Get All Eployees List
exports.getEmployeeList = (req, res) => {

    console.log("here all employees list");

    EmployeeModel.getAllEmployees((err, employees) => {

        console.log("employees are here")
        res.send(employees)
    })
}