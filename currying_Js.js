//Currying 
//can be done in 2 ways: using bind() and Closure

//bind()
let multiply  = function(x, y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(3);

//Closures
let multiplyClosure = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwoClosure = multiplyClosure(2);
multiplyByTwoClosure(3);

let multiplyByThreeClosure = multiplyClosure(3);
multiplyByThreeClosure(3);