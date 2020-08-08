var countdown = document.querySelector("#countdown");
var timerSec = 10;

function startGame() {
    timerSec;
    timerSec--;
    if (timerSec === 0) {
        alert("You've run out of time. Game over.");
    }
}