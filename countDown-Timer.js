//Countdown Timer

//Create a countdown timer that starts at a specified number of seconds and counts down to zero. Update the display every second.
function countDownTimer(startSecond){
  const intervalID = setInterval(printSecond, 1000);
  function printSecond(){
    if(startSecond===-1){
      clearInterval(intervalID);
    }
    else{
      console.log(startSecond--);
    }
  }
}
countDownTimer(-1);
