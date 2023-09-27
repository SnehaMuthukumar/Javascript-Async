//Repeating Message

//a function that prints a message every few seconds using setInterval().

function repeatMessage(message, interval){
  setInterval(function(){
    console.log(message);
  }, interval*1000);
}
repeatMessage("Hi", 3);
