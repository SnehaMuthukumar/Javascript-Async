//tried using setInterval function
//This script will print the current locale time for the first 5 seconds and stop
const intervalTimeId= setInterval(function(){
  const date = new Date();
  console.log(date.toLocaleTimeString());
}, 1000);

setTimeout(function(){
  clearInterval(intervalTimeId);
}, 5000)
