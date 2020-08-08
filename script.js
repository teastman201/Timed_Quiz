var countdown = document.querySelector(".countdown");
var timerSec = 10;
var startButton = document.querySelector("#startButton");
var seconds;

function startGame() {
    timerSec;

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

