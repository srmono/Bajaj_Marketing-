var dbConn = require("../../config/db.config");

var Employee = function(employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.emil = employee.emil;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.description = employee.description;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all employees

Employee.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM employees', (err, res) => {
        if(err){
            console.log("Error while fetching the employees", err)
            result(null, err)
        }else{
            console.log("Employees fetched successfully");
            result(null, res);
        }
    })
}

//Get emp by id

Employee.getEmployeeByID = (id, result) => {
    dbConn.query(`SELECT * FROM employees WHERE id=?`, id, (err, res) => {
        if(err){
            console.log("Error while fetching the employees", err)
            result(null, err)
        } else {
            result(null, res)
        }
    } )

}

// Create new employee
Employee.creatingEmployee = (employeeData, result) => {
    dbConn.query(`INSERT INTO employees SET?`, employeeData, (err, res) => {
        if(err){
            console.log("Error while creating employee", err)
            result(null, err)
        } else {
            console.log("employee inserted")
            result(null, res)
        }
    } )
}

// Update Employee 
Employee.updateEmployee = (id, employeeData, results) => {
    dbConn.query( "UPDATE employees SET first_name=?, last_name=?, emil=?, phone=?, organization=?, description=?, salary=?, status=? WHERE id = ?", [employeeData.first_name, employeeData.last_name, employeeData.emil, employeeData.phone, employeeData.organization, employeeData.description, employeeData.salary, employeeData.status, id],
        (err, res) => {
            if (err) {
                console.log("Error while updating employee", err)
                results(null, err)
            } else {
                console.log("employee updated")
                results(null, res)
            }
        })
}

//Delete Employee
Employee.deleteEmployee = (id, result) => {
    dbConn.query(`DELETE FROM employees WHERE id=?`, [id], (err, res) => {
        if (err) {
            console.log("Error while deleting employee employee", err)
            result(null, err)
        } else {
            console.log("employee deleted")
            result(null, res)
        }
    })
}


module.exports = Employee;