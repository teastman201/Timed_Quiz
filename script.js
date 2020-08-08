var countdown = document.querySelector(".countdown");
var timerSec = 75;
var startButton = document.querySelector("#startButton");
var seconds;
document.querySelector('.correct'). 
style.visibility = 'hidden';  

document.querySelector('.wrong'). 
style.visibility = 'hidden'; 

document.querySelector('.horRow'). 
style.visibility = 'hidden'; 

// Need to know how to undue hover function after user moves mouse away.\
/*
$(document).ready(function(){
    $("button").hover(function(){
      $(this).css("border-style", "dotted");
      $(this).css("border-color", "blue");
      }, function(){
      $(this).css("background-color", "purple");
    });
  });
  */

  /* Why does querySelectorAll need to be used with [0]? */
    
 

function startGame() {
    timerSec += 1;

    seconds = setInterval(function () {

        timerSec--;
        countdown.textContent = timerSec;

        if (timerSec === 0 || timerSec < 1) {
            clearInterval(seconds);
            alert("You've run out of time. Game over.");
        }

    }, 1000);
}

startButton.addEventListener("click", startGame);

