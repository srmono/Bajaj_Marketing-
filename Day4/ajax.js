
// Get the data from server
function loadData(){
    // Init Ajax object
    var xhttp =  new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200 ){
            //this.responseText  : received data from server (response)
            //JSON.parse(this.responseText); : Parse response as js obj
            var responseData = JSON.parse(this.responseText);
            console.log(responseData)
            processData(responseData)
        }
    }

    //Configure
    //
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}

function processData(products){
    //as a product
    var proEl = document.getElementById('products');
    var output = "";
    for(product of products){
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
}

var btn = document.getElementById("btn");
btn.addEventListener( "click", loadData)
//loadData()
