var countdown = document.querySelector(".countdown");
var timerSec = 75;
var startButton = document.querySelector("#startButton");
var seconds;
var cardText = document.querySelector(".card-text");
var cardTitle = document.querySelector(".card-title");
var buttonCreate = document.querySelector(".card-body");
var body = document.body.children[1];
var createButton = document.createElement("BUTTON");
var createButton2 = document.createElement("BUTTON");
var createButton3 = document.createElement("BUTTON");
var createButton4 = document.createElement("BUTTON");
var inputCreate = document.querySelector(".card-body");

var score = 0;
var input = document.createElement("INPUT");

var qOne = {
    test1: "Commonly used data types DO NOT incldue:",
    ans1: "strings",
    ans2: 'booleans',
    ans3: "alerts",
    ans4: 'numbers'
};
var qTwo = {
    test1: "The condition in an if / else statement is enclosed within ___.",
    ans1: "quotes",
    ans2: 'curly brackets',
    ans3: "parentheses",
    ans4: 'square brackets'
}
var qThree = {
    test1: "Arrays in JavaScript can be used to store ___.",
    ans1: "numbers and strings",
    ans2: 'booleans',
    ans3: "other arrays",
    ans4: ' all of the above'
}
var qFour = {
    test1: "String values must be enclosed within __ when being assigned to variables.",
    ans1: "commas",
    ans2: 'curly brackets',
    ans3: "quotes",
    ans4: 'parentheses'
}
var qFive = {
    test1: "A very useful tool used during development and debugging for printing content to the debugger is:",
    ans1: "JavaScript",
    ans2: 'terminal/bash',
    ans3: "for loops",
    ans4: 'console.log'
}

var corAns = document.querySelector('.correct');
var incAns = document.querySelector('.wrong');

/* Why does querySelectorAll need to be used with [0]? */
document.querySelector('.correct').style.visibility = 'hidden';

document.querySelector('.wrong').style.visibility = 'hidden';

document.querySelector('.horRow').
    style.visibility = 'hidden';

var cardBody = document.querySelector(".card-title");

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

function startGame() {

    //  let questions = ["Commonly used data types DO NOT incldue:", "The condition in an if / else statement is enclosed within ___.", "Arrays in JavaScript can be used to store ___.", "String values must be enclosed within __ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:", "All done!"];

    // let answers = ['strings', 'booleans', 'alerts', 'numbers', 'quotes', 'curly brackets', 'square brackets', 'numbers and strings', 'other arrays', 'all of the above', 'commas', 'parentheses', 'JavaScript', 'terminal/bash', 'for loops', 'console.log']

    document.querySelector('#startButton').style.visibility = 'hidden'; 
    var btn0 = createButton;
    var btn1 = createButton2;
    var btn2 = createButton3;
    var btn3 = createButton4;

    cardText.textContent = "";
    cardText.appendChild(btn0);
    cardText.appendChild(btn1);
    cardText.appendChild(btn2);
    cardText.appendChild(btn3);
    btn0.className = "buttons";
    btn1.className = "buttons";
    btn2.className = "buttons";
    btn3.className = "buttons";

    function wrong() {
        incAns.style.visibility = 'visible';
        timerSec - 10;
        testQ1;
        incAns.style.visibility = 'hidden';
    }

    cardTitle.innerHTML = qOne.test1;
    btn0.innerHTML = qOne.ans3;
    btn1.innerHTML = qOne.ans2;
    btn2.innerHTML = qOne.ans1;
    btn3.innerHTML = qOne.ans4;

    btn0.addEventListener("click", testQ1);

    btn1.addEventListener("click", wrong);
    btn2.addEventListener("click", wrong);
    btn3.addEventListener("click", wrong);

    function testQ1() {
        corAns.style.visibility = 'visible';
        score += 1;
        cardTitle.innerHTML = qTwo.test1;
        btn0.innerHTML = qTwo.ans1;
        btn1.innerHTML = qTwo.ans2;
        btn2.innerHTML = qTwo.ans3;
        btn3.innerHTML = qTwo.ans4;
        btn0.addEventListener("click", wrong);
        btn1.addEventListener("click", wrong);
        btn2.addEventListener("click", testQ2);
        btn3.addEventListener("click", wrong);
    }

    function testQ2() {
        corAns.style.visibility = 'visible';
        score += 1;
        cardTitle.innerHTML = qThree.test1;
        btn0.innerHTML = qThree.ans1;
        btn1.innerHTML = qThree.ans2;
        btn2.innerHTML = qThree.ans3;
        btn3.innerHTML = qThree.ans4;
        btn0.addEventListener("click", wrong);
        btn1.addEventListener("click", wrong);
        btn2.addEventListener("click", wrong);
        btn3.addEventListener("click", testQ3);
    }

    function testQ3() {
        corAns.style.visibility = 'visible';
        score += 1;
        cardTitle.innerHTML = qFour.test1;
        btn0.innerHTML = qFour.ans1;
        btn1.innerHTML = qFour.ans2;
        btn2.innerHTML = qFour.ans3;
        btn3.innerHTML = qFour.ans4;
        btn0.addEventListener("click", wrong);
        btn1.addEventListener("click", wrong);
        btn2.addEventListener("click", testQ4);
        btn3.addEventListener("click", wrong);
    }

    function testQ4() {
        corAns.style.visibility = 'visible';
        score += 1;
        cardTitle.innerHTML = qFive.test1;
        btn0.innerHTML = qFive.ans1;
        btn1.innerHTML = qFive.ans4;
        btn2.innerHTML = qFive.ans3;
        btn3.innerHTML = qFive.ans2;
        btn0.addEventListener("click", wrong);
        btn1.addEventListener("click", endGame);
        btn2.addEventListener("click", wrong);
        btn3.addEventListener("click", wrong);
    }

    function endGame() {
        clearInterval(seconds);
        corAns.style.visibility = 'visible';
        score += 1;
        cardTitle.innerHTML = 'All done!';
        btn0.parentNode.removeChild(createButton);
        btn1.parentNode.removeChild(createButton2);
        btn2.parentNode.removeChild(createButton3);
        btn3.parentNode.removeChild(createButton4);
        cardText.appendChild(input);
        input.setAttribute('type', 'text');
    }

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

