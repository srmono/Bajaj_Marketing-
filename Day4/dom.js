// Create Element
var el = document.createElement("div");

//Add div element to body

document.body.appendChild(el);

// create Text Node

var tnode = document.createTextNode("Some Text");

// Add text node to div
el.appendChild(tnode);

// Set Attribute
el.setAttribute("id", "test")

var tool = "JavaScript";
// use few Properties
//el.innerHTML = "<p>Dynamic Text Updated with "+ tool + "</p>";

el.innerHTML = `<p> Dynamic Text Updated with ${tool}. ???? </p>`;
