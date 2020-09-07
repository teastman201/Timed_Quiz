questionsDiv.style.visibility = 'hidden';

function startQuiz(){
    // startDiv.style.visibility = "hidden";
    questionsDiv.style.visibility = 'visible';
   removeElement();
    console.log('test');
    
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById("#removeElem");
    element.parentNode.removeChild(element);
}

