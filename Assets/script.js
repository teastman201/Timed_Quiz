questionsDiv.style.visibility = 'hidden';
correctAns.style.visibility = 'hidden';
wrongAns.style.visibility = 'hidden';
var seconds;
var timerSec = 75;
var countdown = document.querySelector(".countdown");
var score = 0;
var displayTimer = 1;


myArray = [
    // Start questions for quiz
    questOne = ["Commonly used data types DO NOT incldue:", "alerts", 'booleans', "strings", 'numbers'],
    questTwo = ["The condition in an if / else statement is enclosed within ___.", "quotes", 'curly brackets', "parentheses", 'square brackets'],
    questThree = ["Arrays in JavaScript can be used to store ___.", "numbers and strings", 'booleans', "other arrays", 'all of the above'],
    questFour = ["String values must be enclosed within __ when being assigned to variables.", "commas", 'quotes', "curly brackets", 'parentheses'],
    questFive = ["A very useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", 'terminal/bash', "for loops", 'console.log']
    // End questions for quiz
]
// console.log(myArray);


function startQuiz() {
    // Hides answer check area
    questionsDiv.style.visibility = 'visible';
    // Deletes start screen
    document.getElementById("removeElem").remove();
    // Shuffles array
    shuffle(questionsArray);
    // Gets random question to start game    
    chooseQuestion();
    // Populates quiz game
    populateQuiz();
    // Starts game timer
    timerStart();


}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


var questionsArray = [myArray[0][0], myArray[1][0], myArray[2][0], myArray[3][0], myArray[4][0]];

var questionsArrayIndex = 0;



function chooseQuestion() {


    
    randomQuestion = questionsArray[questionsArrayIndex];
   

    return randomQuestion;
};

// global variable, current question index
// keeps track of i from for loop
// 



function populateQuiz() {

    if (randomQuestion == myArray[0][0] || randomQuestion == myArray[1][0] || randomQuestion == myArray[2][0] || randomQuestion == myArray[3][0] || randomQuestion == myArray[4][0]) {

        $("#quesBody").text(chooseQuestion());
        
    }

    checkAns();

};

function nextQuestion() {

    // next question ot increment global variable 
    if (questionsArrayIndex < 5) {
        questionsArrayIndex++;
    }
    console.log(questionsArrayIndex);
    console.log(chooseQuestion());

    // Selects next question
    chooseQuestion();
    // Populates quiz game
    populateQuiz();

}


function checkAns() {
    if (randomQuestion == myArray[0][0]) {
        for (i = 1; i < myArray[0].length; i++) {
            $("#ans" + i).text(myArray[0][i]);
        }

    }

    if (randomQuestion == myArray[3][0]) {

        for (i = 1; i < myArray[3].length; i++) {
            $("#ans" + i).text(myArray[3][i]);
        }

    }

    if (randomQuestion === myArray[1][0]) {

        for (i = 1; i < myArray[1].length; i++) {
            $("#ans" + i).text(myArray[1][i]);
        }

    }

    if (randomQuestion == myArray[2][0]) {
        for (i = 1; i < myArray[2].length; i++) {
            $("#ans" + i).text(myArray[2][i]);
        }
      
    }

    if (randomQuestion == myArray[4][0]) {
        for (i = 1; i < myArray[4].length; i++) {
            $("#ans" + i).text(myArray[4][i]);
        }       

    }

    $(".buttons").on('click', function () {
        console.log($(this));
        if ($(this)[0].innerText == myArray[0][1] ||
            $(this)[0].innerText == myArray[3][2] ||
            $(this)[0].innerText == myArray[1][3] ||
            $(this)[0].innerText == myArray[2][4] ||
            $(this)[0].innerText == myArray[4][4]) {
            console.log($(this)[0].innerText + " right")
            rightChoice();
            nextQuestion();
            score += 1;
            // console.log('gj')
            // console.log(score);


        } else if ($(this)[0].innerText !== myArray[0][1] ||
        $(this)[0].innerText !== myArray[3][2] ||
        $(this)[0].innerText !== myArray[1][3] ||
        $(this)[0].innerText !== myArray[2][4] ||
        $(this)[0].innerText !== myArray[4][4]) {
            console.log($(this)[0].innerText + " wrong")
            wrongChoice();
            nextQuestion();

        }

    })

}

function timerStart() {
    seconds = setInterval(function () {

        timerSec--;
        countdown.textContent = timerSec;

        if (timerSec === 0 || timerSec < 1) {
            clearInterval(seconds);
            alert("You have run out of time. Game over.");
        }

    }, 1000);
}


function rightChoice() {

    // display = setInterval(function () {

    //     displayTimer--;
    //     correctAns.style.visibility = 'visible';

    //     if (displayTimer === 0) {
    //         clearInterval(display);
    //         correctAns.style.visibility = 'hidden';
    //     }

    // }, 1000);


}

function wrongChoice() {

    // display = setInterval(function () {

    //     displayTimer--;
    //     wrongAns.style.visibility = 'visible';

    //     if (displayTimer == 0) {
    //         clearInterval(display);
    //         wrongAns.style.visibility = 'hidden';
    //     }

    // }, 1000);


}