// $(".startButton").click(function(){
//     startQuiz();
// });
// hideIncorrect.style.visibility = 'hidden';
// hideCorrect.style.visibility = 'hidden';


// var countdown = document.querySelector(".countdown");
// var timerSec = 75;
// var startButton = document.querySelector("#startButton");
// var seconds;
// var cardText = document.querySelector(".card-text");
// var cardTitle = document.querySelector(".card-title");
// var buttonCreate = document.querySelector(".card-body");
// var body = document.body.children[1];
// var createButton = document.createElement("BUTTON");
// var createButton2 = document.createElement("BUTTON");
// var createButton3 = document.createElement("BUTTON");
// var createButton4 = document.createElement("BUTTON");
// var createButton5 = document.createElement("BUTTON");
// var inputCreate = document.querySelector(".card-body");
// var finalText = cardText;
// var finalMessage = document.createElement("p");
// var info = []; //and array of objects ie {initials: "" highscore: 0}
// var viewHighScores = document.querySelector('.anchor');
// var hideCorrect = document.querySelector('.correct');
// var hideIncorrect = document.querySelector('.wrong');
// var hideRow = document.querySelector('.horRow');



// // var highscores = ;

// // var finalMessageNode = document.createTextNode("Enter your initials:");
// var score = 0;
// var input = document.createElement("INPUT");

// var qOne = {
//     test1: "Commonly used data types DO NOT incldue:",
//     ans1: "strings",
//     ans2: 'booleans',
//     ans3: "alerts",
//     ans4: 'numbers'
// };
// var qTwo = {
//     test1: "The condition in an if / else statement is enclosed within ___.",
//     ans1: "quotes",
//     ans2: 'curly brackets',
//     ans3: "parentheses",
//     ans4: 'square brackets'
// }
// var qThree = {
//     test1: "Arrays in JavaScript can be used to store ___.",
//     ans1: "numbers and strings",
//     ans2: 'booleans',
//     ans3: "other arrays",
//     ans4: ' all of the above'
// }
// var qFour = {
//     test1: "String values must be enclosed within __ when being assigned to variables.",
//     ans1: "commas",
//     ans2: 'curly brackets',
//     ans3: "quotes",
//     ans4: 'parentheses'
// }
// var qFive = {
//     test1: "A very useful tool used during development and debugging for printing content to the debugger is:",
//     ans1: "JavaScript",
//     ans2: 'terminal/bash',
//     ans3: "for loops",
//     ans4: 'console.log'
// }

// var corAns = document.querySelector('.correct');
// var incAns = document.querySelector('.wrong');

// /* Why does querySelectorAll need to be used with [0]? */

// var cardBody = document.querySelector(".card-title");

// /* clear page and recreate using javascript */


// // Need to know how to undue hover function after user moves mouse away.\
// /*
// $(document).ready(function(){
//     $("button").hover(function(){
//       $(this).css("border-style", "dotted");
//       $(this).css("border-color", "blue");
//       }, function(){
//       $(this).css("background-color", "purple");
//     });
//   });
//   */

// function startGame() {

    


//     hideRow.style.visibility = 'hidden';
//     hideIncorrect.style.visibility = 'hidden';
//     hideCorrect.style.visibility = 'hidden';
//     //  let questions = ["Commonly used data types DO NOT incldue:", "The condition in an if / else statement is enclosed within ___.", "Arrays in JavaScript can be used to store ___.", "String values must be enclosed within __ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:", "All done!"];

//     // let answers = ['strings', 'booleans', 'alerts', 'numbers', 'quotes', 'curly brackets', 'square brackets', 'numbers and strings', 'other arrays', 'all of the above', 'commas', 'parentheses', 'JavaScript', 'terminal/bash', 'for loops', 'console.log']
//     timerSec += 1;
//     document.querySelector('#startButton').style.visibility = 'hidden';
//     var btn0 = createButton;
//     var btn1 = createButton2;
//     var btn2 = createButton3;
//     var btn3 = createButton4;
//     var btn4 = createButton5;

//     cardText.textContent = "";
//     cardText.appendChild(btn0);
//     cardText.appendChild(btn1);
//     cardText.appendChild(btn2);
//     cardText.appendChild(btn3);
//     btn0.className = "buttons";
//     btn1.className = "buttons";
//     btn2.className = "buttons";
//     btn3.className = "buttons";
//     btn4.className = "submit";

//     // function wrong() {
//     //     incAns.style.visibility = 'visible';
//     //     timerSec - 10;
//     //     testQ1;
//     //     incAns.style.visibility = 'hidden';
//     // }

//     // var invokeArr = [testQ1, testQ2, testQ3, testQ4, endGame];

//     function wrong() {
//         alert("Wrong Answer")
//         timerSec - 10;       
        
//         // console.log(invokeArr);
//     }
//     // questionFct

//     cardTitle.innerHTML = qOne.test1;
//     btn0.innerHTML = qOne.ans3;
//     btn1.innerHTML = qOne.ans2;
//     btn2.innerHTML = qOne.ans1;
//     btn3.innerHTML = qOne.ans4;

//     btn0.addEventListener("click", testQ1());
//     btn1.addEventListener("click", wrong());
//     btn2.addEventListener("click", wrong());
//     btn3.addEventListener("click", wrong());

//     function testQ1() {
//         corAns.style.visibility = 'visible';
//         score += 1;
//         cardTitle.innerHTML = qTwo.test1;
//         console.log(btn0.innerHTML);
//         btn0.innerHTML = qTwo.ans1;
//         btn1.innerHTML = qTwo.ans2;
//         btn2.innerHTML = qTwo.ans3;
//         btn3.innerHTML = qTwo.ans4;
//         btn0.addEventListener("click", function(){ wrong(testQ2) });
//         btn1.addEventListener("click", function(){ wrong(testQ2) });
//         btn2.addEventListener("click", testQ2);
//         btn3.addEventListener("click", function(){ wrong(testQ2) });
//     }

    
//     function testQ2() {
//         corAns.style.visibility = 'visible';
//         score += 1;
//         cardTitle.innerHTML = qThree.test1;
//         btn0.innerHTML = qThree.ans1;
//         btn1.innerHTML = qThree.ans2;
//         btn2.innerHTML = qThree.ans3;
//         btn3.innerHTML = qThree.ans4;
//         btn0.addEventListener("click", function(){ wrong(testQ3) });
//         btn1.addEventListener("click", function(){ wrong(testQ3) });
//         btn2.addEventListener("click", function(){ wrong(testQ3) });
//         btn3.addEventListener("click", testQ3);
//     }

//     function testQ3() {
//         corAns.style.visibility = 'visible';
//         score += 1;
//         cardTitle.innerHTML = qFour.test1;
//         btn0.innerHTML = qFour.ans1;
//         btn1.innerHTML = qFour.ans2;
//         btn2.innerHTML = qFour.ans3;
//         btn3.innerHTML = qFour.ans4;
//         btn0.addEventListener("click", function(){ wrong(testQ4) });
//         btn1.addEventListener("click", function(){ wrong(testQ4) });
//         btn2.addEventListener("click", testQ4);
//         btn3.addEventListener("click", function(){ wrong(testQ4) });
//     }

//     function testQ4() {
//         corAns.style.visibility = 'visible';
//         score += 1;
//         cardTitle.innerHTML = qFive.test1;
//         btn0.innerHTML = qFive.ans1;
//         btn1.innerHTML = qFive.ans4;
//         btn2.innerHTML = qFive.ans3;
//         btn3.innerHTML = qFive.ans2;
//         btn0.addEventListener("click", function(){ wrong(endGame) });
//         btn1.addEventListener("click", endGame);
//         btn2.addEventListener("click", function(){ wrong(endGame) });
//         btn3.addEventListener("click", function(){ wrong(endGame) });
//     }

//     function endGame() {
//         clearInterval(seconds);
//         corAns.style.visibility = 'visible';
//         score += 1;
//         cardTitle.innerHTML = 'All done!';
//         // btn0.parentNode.removeChild(createButton);
//         btn0.parentNode.removeChild(createButton);
//         btn1.parentNode.removeChild(createButton2);
//         btn2.parentNode.removeChild(createButton3);
//         btn3.parentNode.removeChild(createButton4);
//         document.querySelector("body > div.card > div > p").append(finalMessage);
//         finalMessage.className = "finalMessage";
//         finalMessage.textContent = "Enter your initials: ";
//         finalText.textContent = `Your final score is: ` + score + `.`;

//         cardText.appendChild(finalMessage);
//         finalText.className = "finalStyle";


//         // finalMessage = finalMessageNode;
//         // finalMessage;


//         cardText.appendChild(input);
//         cardText.appendChild(btn4);

//         btn4.innerHTML = 'Submit';
//         btn4.setAttribute('type', 'submit');
//         input.setAttribute('type', 'text');
//         input.className = "inputInit";

//         finalText.className = "finalStyle";
//         // finalMessage.className = "finalMessage";
//         // finalMessage.textContent = "Enter your initials: ";

//         // cardText.appendChild(finalMessage);
//         // finalMessage = finalMessageNode;
//         // finalMessage;
//         //finalMessage.textContent = "Enter your initials: ";
//         //finalText.textContent = `Your final score is: ` + score + `.`;

//         //cardText.appendChild(input);
//         //cardText.appendChild(btn4);
//         var saveInput = document.querySelector(".inputInit");
//         document.querySelector('#startButton').style.visibility = 'hidden';

//         function submit() {
//             // event.preventDefault();
//             // saveInput;
//             // if (localStorage !== null) {


//             //create object with user details * {initials: "" highscore: 0}
//             const userObj = {
//                 initals: document.querySelector('.inputInit').value,
//                 score: 0
//             }

//             //get highscores from localstorage and store in variable
//             info = JSON.parse(localStorage.getItem("score")) || [];

//             // //set info to existing or empty []
//             // info = (existing) ? existing 

//             //add new user object
//             info.push(userObj);

//             localStorage.setItem("score", JSON.stringify(info));

//             window.location = viewHighScores;
//             // console.log(localStorage.getItem("initials"));
//             // //create an empty object
//             // console.log(info.initials);

//             // const setToLocal = (initials) => {    

//             //     const userScores = localStorage.getItem("userScore")

//             //             console.log(userScores)
//             //             if ( userScores ) {
//             //                 const currentList = JSON.parse(userScores);  
//             //                 currentList.push({score: userScore, initial: initials});
//             //             localStorage.setItem("userScore", JSON.stringify(currentList));
//             //             } else {
//             //             const userScoreList = []

//             //             userScoreList.push({score: userScore, initial: initials});
//             //             localStorage.setItem("userScore", JSON.stringify(userScoreList));
//             //             }
//             //         }



//             // highscores.push(newScore);
//             // localStorage.setItem('highscores', JSON.stringify(highscores));


//             // const userScores = localStorage.getItem("userScore")

//             //                 console.log(userScores)
//             //                 if ( userScores ) {
//             //                     const currentList = JSON.parse(userScores);  
//             //                     let initial = ''

//             //                     currentList.push({score: userScore, initial: initial});
//             //                 localStorage.setItem("userScore", JSON.stringify(currentList));
//             //                 }
//             // }
//             // else {
//             //     localStorage.setItem("initials", JSON.stringify(info.initials));
//             // }
//             // info.lastName = document.getElementById('lastName').value;
//             // allInfo.push(info);//you had to initialize the array before
//         }

//         btn4.addEventListener("click", submit);
//     }

    
    
// }

// startButton.addEventListener("click", startGame);



// // strategy for organizing data objects with an array
// // console.log(arrayOfQuestionObjects[0].test1)
// let arrayOfQuestionObjects = [
//     {
//         question: "Commonly used data types DO NOT incldue:",
//         ans1: "strings",
//         ans2: 'booleans',
//         ans3: "alerts",
//         ans4: 'numbers',
//         correct: "alerts"
//     },
//     {
//         test1: "Commonly used data types DO NOT incldue:",
//         ans1: "strings",
//         ans2: 'booleans',
//         ans3: "alerts",
//         ans4: 'numbers'
//     },
//     {
//         test1: "Commonly used data types DO NOT incldue:",
//         ans1: "strings",
//         ans2: 'booleans',
//         ans3: "alerts",
//         ans4: 'numbers'
//     }
// ]


// // reorganize button variables
// // create a count variable that starts at 0
// let count = 0
// // refactoring potential logic

// function startExample(){
//     //create the card and populate with info
//     // from arrayOfQuestionObjects[count]
// }

// const exampleBtn = document.querySelector(".button")
// // add event listeners to each button
// exampleBtn.addEventListener("click", function(e){
// console.log(e)
// console.log(e.target.value)
// let answer = e.target.value
// nextquestion(answer)
// })

// function nextQuestion(answerData){
//     if(answerData === arrayOfQuestionObjects[count].correct){
//         // do right answer stuff
//     } else{
//         // wrong answer stuff
//     }

//     count++
//     // populate html with question and answer info with
//     //arrayOfQuestionObjects[count]
// }

// //for loops
// // first parameter is the value we want our count to start at
// // second paraemter is condition if true continue loop if false stop loop
// // third parameter is how much to increase i each loop
// let array = ["cat", "dog", "bird"]
// for(let i = 0; i < array.length; i++) {
//     console.log(i)
//     console.log(array[i])
//     }

