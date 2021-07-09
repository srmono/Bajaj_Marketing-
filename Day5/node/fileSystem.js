var http = require("http");
var fs = require('fs');

// Read File
// Create File
// Update files 
// Delete files 
// Rename files

// create new file and write some text in that
//fs.writeFileSync('read.txt', "Welcome to fs module");

//fs.writeFileSync('read.txt', "Updated data");

//fs.appendFileSync("read.txt", "Welcome ")

// let fileData = fs.readFileSync("read.txt");

// console.log(fileData.toString())

fs.renameSync('read.txt', "demo.txt")

