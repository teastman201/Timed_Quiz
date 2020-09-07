var goBackButton = document.querySelector("#goBack");
var clearStorage = document.querySelector("#clearScores");
var info = JSON.parse(localStorage.getItem('score'));
console.log(info);

var append = document.querySelector("body > div.card > div > p");
console.log(append);
// append.textContent = `initals: ${info[0].initals} score: ${info[0].score}`;
for (var i = 0; i < info.length; i++){
    var div = document.createElement('div');
    div.textContent = `initals: ${info[i].initals} score: ${info[i].score}`;
    append.appendChild(div);
}

function goBack() {
    window.location = "./index.html";
}

function clearScores() {
    localStorage.clear();
}

goBackButton.addEventListener("click", goBack);
clearStorage.addEventListener("click", clearScores);
