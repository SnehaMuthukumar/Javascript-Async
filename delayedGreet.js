//Delayed Greeting

//Write a function that delays printing a greeting message using setTimeout().

function delayedGreet(greet, delay){
  setTimeout(function(){
    console.log(`Hello ${greet}!`);
  }, delay*1000);
}
delayedGreet("Sneha", 10);
