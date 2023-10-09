let name= {
    firstName: "Sneha",
    lastName: "Muthukumar"
}

let printName = function(city, state){
    console.log(this.firstName+" "+this.lastName+" from "+city+", "+state);
}
 //function borrowing
 //call()
 printName.call(name, "Chennai", "TamilNadu");
 
 //apply()
printName.apply(name, ["Chennai", "TamilNadu"]);

//bind() - returns the function, which can be stored and invoked later
let printNameLater = printName.bind(name, "Chennai", "TamilNadu");
printNameLater();
