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
    shuffle(arr);
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

// Used like so
var arr = [myArray[0][0], myArray[1][0], myArray[2][0], myArray[3][0], myArray[4][0]];
shuffle(arr);
// console.log(arr);

function chooseQuestion() {
    // questionsArray = [
    //     myArray[0][0],
    //     myArray[1][0],
    //     myArray[2][0],
    //     myArray[3][0],
    //     myArray[4][0]
    // ]
    
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        randomQuestion = arr[i];
        console.log(arr[i]);
    }
    
    // ask chooseQuestion[i]
  // run function that checks if the answer is correct
    // randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    
    // console.log('randomQuestion');
    // arrayIndex = myArray.indexOf(randomQuestion);
    // console.log(questionsArray); // returns multiple responses for the same line in console.
    return randomQuestion;
};

console.log(chooseQuestion())

// console.log(chooseQuestion());



// function getArrayIndex() {

//     for (i = 0; i < myArray.length; i++) {
//         // i;
//         // console.log(myArray[i]);

//         for (t = 0; t < myArray[i].length; t++) {
//             // console.log(myArray[i][t])

//             let arrayIndex = myArray[i][t];
//             // console.log(arrayIndex.indexOf("alerts"));
//         }
//         // return i;
//         // arrayIndex = 

//     }


// }

// for (i = 0; i < myArray.length; i++) {
//     console.log(i);

// }

// console.log(getArrayIndex());

// arrayString
// .indexOf(arrayString)

// (arrayIndex);
// console.log(myArray[0].indexOf("alerts"));





function populateQuiz() {

    if (randomQuestion == myArray[0][0] || randomQuestion == myArray[1][0] || randomQuestion == myArray[2][0] || randomQuestion == myArray[3][0] || randomQuestion == myArray[4][0]) {

        $("#quesBody").text(chooseQuestion());
        // console.log('populateQuiz');

    }

    checkAns();

};



function checkAns() {
    if (randomQuestion == myArray[0][0]) {
        for (i = 1; i < myArray[0].length; i++) {
            $("#ans" + i).text(myArray[0][i]);
        }

        $("#ans1").click(function () {
            if ($(this)[0].outerText == myArray[0][1]) {
                rightChoice();
                nextQuestion();
                score += 1;
                console.log('gj')
                console.log(score);


            }

        })

        $(this).click(function () {
            if ($(this)[0].outerText !== myArray[0][1]) {
                wrongChoice();
                nextQuestion();
                console.log('wrong');
                // timerSec -= 10;
            }
        })

    }

    if (randomQuestion == myArray[3][0]) {

        for (i = 1; i < myArray[3].length; i++) {
            $("#ans" + i).text(myArray[3][i]);
        }

        $("#ans2").click(function () {
            if ($(this)[0].outerText == myArray[3][2]) {
                rightChoice();
                nextQuestion();
                score += 1;
                console.log('gj')
                console.log(score);
            }

        })

        $(this).click(function () {
            if ($(this)[0].outerText !== myArray[3][2]) {
                wrongChoice();
                nextQuestion();
                console.log('wrong');
                // timerSec -= 10;
            }
        })

    }

    if (randomQuestion === myArray[1][0]) {

        for (i = 1; i < myArray[1].length; i++) {
            $("#ans" + i).text(myArray[1][i]);
        }

        $("#ans3").click(function () {
            if ($(this)[0].outerText == myArray[1][3]) {
                rightChoice();
                nextQuestion();
                score += 1;
                console.log('gj')
                console.log(score);
            }

        })

        $(this).click(function () {
            if ($(this)[0].outerText !== myArray[1][3]) {
                wrongChoice();
                nextQuestion();
                console.log('wrong');
                // timerSec -= 10;
            }
        })

    }

    if (randomQuestion == myArray[2][0]) {
        for (i = 1; i < myArray[2].length; i++) {
            $("#ans" + i).text(myArray[2][i]);
        }

        $("#ans4").click(function () {
            if ($(this)[0].outerText == myArray[2][4]) {
                rightChoice();
                nextQuestion();
                score += 1;
                console.log('gj');
                console.log(score);
            }

        })

        $(this).click(function () {
            if ($(this)[0].outerText !== myArray[2][4]) {
                wrongChoice();
                nextQuestion();
                console.log('wrong');
                // timerSec -= 10;
            }
        })

    }

    if (randomQuestion == myArray[4][0]) {
        for (i = 1; i < myArray[4].length; i++) {
            $("#ans" + i).text(myArray[4][i]);
        }

        $("#ans4").click(function () {
            if ($(this)[0].outerText == myArray[4][4]) {
                rightChoice();
                nextQuestion();
                score += 1;
                console.log('gj')
                console.log(score);
            }

        })

        $(this).click(function () {
            if ($(this)[0].outerText !== myArray[4][4]) {
                wrongChoice();
                nextQuestion();
                console.log('wrong');
                // timerSec -= 10;
            }
        })

    }

    editArray();
}

function editArray() {
    // myArray.splice(3, 1); // removes only the first item of the array
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

function nextQuestion() {

    // console.log('before random')
    // Selects next question
    chooseQuestion();
    // Populates quiz game
    populateQuiz();
    // console.log('after random')
}


// console.log(timerSec);


function rightChoice() {

   display = setInterval(function () {

        displayTimer--;
        correctAns.style.visibility = 'visible';

        if (displayTimer === 0) {
            clearInterval(display);
            correctAns.style.visibility = 'hidden';
        }

    }, 1000);


}

function wrongChoice() {

    display = setInterval(function () {

        displayTimer--;
        wrongAns.style.visibility = 'visible';

        if (displayTimer == 0) {
            clearInterval(display);
            wrongAns.style.visibility = 'hidden';
        }

    }, 1000);


}












