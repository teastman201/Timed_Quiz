var countdown = document.querySelector(".countdown");
var timerSec = 75;
var startButton = document.querySelector("#startButton");
var seconds;
var cardText = document.querySelector(".card-text");
var cardTitle = document.querySelector(".card-title");
var buttonCreate = document.querySelector(".card-body");
var body = document.body.children[1];
var createButton = document.createElement("BUTTON");


/* Why does querySelectorAll need to be used with [0]? */
    document.querySelector('.correct').style.visibility = 'hidden';  

    document.querySelector('.wrong').
    style.visibility = 'hidden'; 

    document.querySelector('.horRow').
    style.visibility = 'hidden'; 

var cardBody = document.querySelector(".card-title");

console.log();

    
    /* clear page and recreate using javascript */
    

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

/*
let questions = ["Commonly used data types DO NOT incldue:", "Commonly used data types DO NOT incldue:", "The condition in an if / else statement is enclosed within ___.", "Arrays in JavaScript can be used to store ___.", "String values must be enclosed within __ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:", "All done!"];

let answers = 

var test1 = {
  question: questions[0],
  answerOne: "strings",
  answerTwo: 'booleans',
  answerThree: "alerts"
  answerFour: "quotes"
};
*/

function startGame() {
    
    let questions = ["Commonly used data types DO NOT incldue:", "Commonly used data types DO NOT incldue:", "The condition in an if / else statement is enclosed within ___.", "Arrays in JavaScript can be used to store ___.", "String values must be enclosed within __ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:", "All done!"];

    let answers = ['strings', 'booleans', 'alerts', 'numbers', 'quotes', 'curly brackets', 'square brackets', '' ]
    
    cardTitle.innerHTML =  questions[3];
    //  buttonCreate.innerHTML = document.createElement("BUTTON"); 
    var btn0 = createButton;
    var btn1 = createButton;
    btn0.innerHTML = "answerOne";
    btn1.innerHTML = "answerTwo";
    cardText.textContent = "";  
    cardText.appendChild(btn0, btn1); 

   
    
    
    timerSec += 1;
    
    console.log(seconds);
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

