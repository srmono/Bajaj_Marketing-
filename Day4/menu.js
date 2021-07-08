// local
var menu = ["Home", "About", "Services", "contact", "Faq" ];

var wrap = document.getElementById("menu");

var el = "<ul>";

for(mel of menu){
    el += `<li><a href="${mel}.html"> ${mel} </a></li>`
}

el += "</ul>";

wrap.innerHTML = el;