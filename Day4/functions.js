function sum(){
    console.log("i am a funciton")
}

sum()
sum;// funciton returns itself

function total(a, b){
   var c = a + b;
   return c;
}

//NaN: not a number ? 9 + undefined 

function cartTotal(){
//    console.log(arguments)
    var totalAmount = 0;

    for(price of arguments){
        totalAmount += price
    }
    return totalAmount;
}



