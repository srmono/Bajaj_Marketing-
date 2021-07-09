const express = require("express");

// Create express app
const app = express()

// setup PORT
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello Venkat, I am Express Js")
})

const employeeRoutes = require('./src/routes/employee.route');
// create emp routes
app.use('/api/v1/employees', employeeRoutes)

app.listen(port, () => {
    console.log(`App is listening port ${port}`)
});