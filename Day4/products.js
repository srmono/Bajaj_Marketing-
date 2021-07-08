//js Object notation
var products = [ 
    {
        image: "product1.jpeg",
        brand: "Mi",
        price: "1234",
        category: "mobile"
    },
    {
        image: "product2.jpeg",
        brand: "SkYbags",
        price: "787",
        category: "Travel Bags"
    },
    {
        image: "product1.jpeg",
        brand: "Lenovo",
        price: "1234",
        category: "mobile"
    },
    {
        image: "product2.jpeg",
        brand: "Dell",
        price: "787",
        category: "Travel Bags"
    },
    {
        image: "product1.jpeg",
        brand: "Lenovo",
        price: "1234",
        category: "mobile"
    },
    {
        image: "product2.jpeg",
        brand: "Dell",
        price: "787",
        category: "Travel Bags"
    }
]

var proEl = document.getElementById('products');

var output = "";

for(product of products){
    //console.log(product.brand)
    output += `
        <div id="product">
            <div id="pimg">
                <img src="pics/${product.image}">
            </div>
            <h3>${product.brand}</h3>
            <h4>${product.price}</h4>
            <h3>${product.category}</h3>
        </div>`
}

proEl.innerHTML = output;
