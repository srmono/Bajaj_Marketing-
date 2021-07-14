const express = require("express");
const bodyParser = require('body-parser');

// Create express app
const app = express()

// Parse request data content type application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false}));// deprecated
app.use(express.urlencoded()); // Parse URL-encoded bodies

// parse request data content type application/json
//app.use(bodyParser.json()); // deprecated
app.use(express.json()); // used to parse json bodies


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