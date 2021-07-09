let x = 10;
const y = 10;

// Arrow functions

var message = (name,prof) => `Hello ${name} : Your a ${prof}`

var name = "venkat";
var prof = "trainer";

var person = {
    name, 
    prof,
    getProf(){
        return this.prof
    }
}
//message()

var tools = ["html", "css", "js", "node"];

// var a = tools[0];
// var b = tools[1];
var [a,b] = tools;

var laptop = {
    ram: "16gb",
    brand: "lenovo",
    color: "black"
}

var { ram, brand } = laptop;




















