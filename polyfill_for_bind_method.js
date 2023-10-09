//polyfill for bind method(polyfill - browser fallback)
let name= {
    firstName: "Sneha",
    lastName: "Muthukumar"
}

let printName = function(city, state, country){
    console.log(this.firstName+" "+this.lastName+" from "+city+", "+state+" "+country);
}

//default bind use
let printLater = printName.bind(name, "Chennai", "TamilNadu");
printLater("India");

//polyfill myBind()

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}
let printMyWay = printName.myBind(name, "Chennai", "TamilNadu");
printMyWay("India");

