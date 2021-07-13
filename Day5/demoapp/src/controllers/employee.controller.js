
const Employee = require('../models/employee.model');
const EmployeeModel = require('../models/employee.model');

// Get All Eployees List
exports.getEmployeeList = (req, res) => {

    console.log("here all employees list");

    EmployeeModel.getAllEmployees((err, employees) => {

        console.log("employees are here")
        res.send(employees)
    })
}

// Get Employee by Id

exports.getEmployeeByID = (req, res) => {
    console.log('get emp by id');
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
        if(err)
        res.send(err);
        res.send(employee);
    })
}

// Create New Employee
exports.createNewEmployee = (req, res) => {
    console.log("Create New Employee", req.body )
    const employeeReqData = new EmployeeModel(req.body);

    //check null
    if( req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: "Please fill all the fields"})
    }else{
        console.log("success, valid data")
        //return; 
        EmployeeModel.creatingEmployee(employeeReqData, (err, employee) => {
            if(err)
                res.send(err)
                res.json({ status: true, message: "Created Successfully", data:employee })
        })
    }
} 

// Update employee
exports.updateEmployee = (req, res) => {
    console.log("Update Employee", req.body )
    const employeeReqData = new EmployeeModel(req.body);

    //check null
    if( req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: "Please fill all the fields"})
    }else{
        console.log("success, valid data")
        //return; 
        EmployeeModel.updateEmployee( req.params.id , employeeReqData, (err, employee) => {
            if(err)
                res.send(err)
                res.json({ status: true, message: "Employee Updated Successfully", data:employee })
        })
    }
}

// Delete Employee By Id
exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee( req.params.id, (err, employee) => {
        if(err)
        res.send(err)
        res.json({ success: true, message: "Employee delete successfully...!"})
    })
}