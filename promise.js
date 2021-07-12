
   //Task  ==>  promise  ==> do or don't do => 

   const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("Solution is here, I am resolved");
            //reject(new Error("there is some error"))
        }, 5000)
   });

   promise
        .then( res => console.log(res))
        .catch( err => console.log(err))