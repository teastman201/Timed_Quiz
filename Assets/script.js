questionsDiv.style.visibility = 'hidden';
var seconds;
var timerSec = 75;
var countdown = document.querySelector(".countdown");

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
    // Gets random question to start game
    randomizeQuestions();
    // Populates quiz game
    populateQuiz();
    // Starts game timer
    timerStart();

}

function randomizeQuestions() {
    questionsArray = [
        questOne[0],
        questTwo[0],
        questThree[0],
        questFour[0],
        questFive[0]
    ]
    randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    console.log(randomQuestion); // returns multiple responses for the same line in console.
    return randomQuestion;
};

function populateQuiz() {

    if (randomQuestion == myArray[0][0] || randomQuestion == myArray[1][0] || randomQuestion == myArray[2][0] || randomQuestion == myArray[3][0] || randomQuestion == myArray[4][0]) {
        $("#quesBody").text(randomizeQuestions());
    }
    checkAns();

};

function checkAns() {
    if (randomQuestion == myArray[0][0]) {
        for (i = 1; i < myArray[0].length; i++) {
            $("#ans" + i).text(myArray[0][i]);
        }
        
        // if ($("#ans1")[0].outerText == myArray[0][1]) {
        //     console.log(myArray[0][1]);
        // }
    }
    if (randomQuestion == myArray[1][0]) {
        for (i = 1; i < myArray[1].length; i++) {
            $("#ans" + i).text(myArray[1][i]);
        }
        if ($("#ans3")[0].outerText == myArray[1][3]) {
            console.log(myArray[1][3]);
        }
    }
    if (randomQuestion == myArray[2][0]) {
        for (i = 1; i < myArray[2].length; i++) {
            $("#ans" + i).text(myArray[2][i]);
        }
        if ($("#ans4")[0].outerText == myArray[2][4]) {
            console.log(myArray[2][4]);
        }
    }
    if (randomQuestion == myArray[3][0]) {
        for (i = 1; i < myArray[3].length; i++) {
            $("#ans" + i).text(myArray[3][i]);
        }
        if ($("#ans2")[0].outerText == myArray[3][2]) {
            console.log(myArray[3][2]);
        }
    }
    if (randomQuestion == myArray[4][0]) {
        for (i = 1; i < myArray[4].length; i++) {
            $("#ans" + i).text(myArray[4][i]);
        }
        if ($("#ans4")[0].outerText == myArray[4][4]) {
            console.log(myArray[4][4]);
        }
    }

    editArray();
}

function editArray() {
    // myArray.splice(randomQuestion, 1); // removes only the first item of the array
    // console.log(myArray);
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

$(this).click(function(){
    if ($(this)[0].outerText == myArray[0][1]) {
        console.log(myArray[0][1]);
    } 
    
  });


// console.log(randomizeQuestions());


