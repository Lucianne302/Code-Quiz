var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startButton = document.getElementById('startButton');
var questionElement = document.getElementById('question');
//var currentQuestion= 0;
var score = 0;

var questions = [ // array with multiple objects for questions, choices, correct answers
    {
        question: "What does API stand for?", //Question 1
        choices: ["Tostitos", "Applicable Programming Interface", "Applicable Programming Insurance"], //multiple choice answers
        correct: "Applicable Programming Interface" //correct answer
    },
    {
        question: "Why is javascript called Richer Interface?",
        choices: ["Because you can include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors", " Because it include such items as learning components and slides to give a Rich Interface to your site visitors", "Because there are many things you can do with site visitors to get rich"], 
        correct: "Because you can include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors"
    },
    {
        question: "How to read array elements?",
        choices: ["for var i = 0; i < x.length; i++", "for (i = 0; i < x);", "for (var i = 0; i < x.length; i++)"], 
        correct: "for (var i = 0; i < x.length; i++)"
    },
    {
        question: "How can we create an object in JS?",
        choices: ["var object: {...};", "var object: (...);", "var object = {...};"],
        correct: "var object = {...};"
    },
    {
        question: "What is the difference between “==” and “===” ?",
        choices: ["== only compares values while === calculates the total values", "== calculates values while === compare values and type both", "== only compares values while === compare values and type both"], 
        correct: "== only compares values while === compare values and type both"
    }
];

function questionCheck() {
    var question = questions[currentQuestion];
    console.log(question);
    if(question.correct === this.textContent) {
        //increase score
        //score++
    } else {
        //if incorrect, decrease score
        //score--
    }

    if (currentQuestion === question.length) {
        //show highscore page
    }
} 

function getQuestion(currentQuestion) {
    var myQuestion = questions[currentQuestion];
    console.log(myQuestion);
    document.getElementById("question").innerHTML = myQuestion.question;
    var myChoices=""
    for( var i=0;i<myQuestion.choices.length;i++){
        console.log(myQuestion.choices[i]);
        myChoices+="<li>"+myQuestion.choices[i]+"</li>";
    }
    console.log(myChoices);

    document.getElementById("choices").innerHTML = myChoices;
    //console.log
    //answerList.innerHTML = "";
    /*for (var i = 0; i < questions.choices.length; i++) {
        questions.choices[i];
        var newItem = document.createElement("li");
        newItem.textContent = questions.choice[i];
        answerList.appendChild(newItem);
        newItem.addEventListener("click", questionCheck);
    } */
};

function myQuiz(){
    var quizSections="<section class='questions' id='questions'>";
    quizSections+="<h3 class='question' id='question'></h3>";
    quizSections+="<ol class='choices' id='choices'></ol>";
    quizSections+="</section>";
    document.getElementById("quiz").innerHTML=quizSections;

    for (var i=0; i<=questions.length; i++){
        getQuestion(i);
    }
}

function startingContent(){
    var innerText="<div class='container'>";
    innerText+="<h1 class='instructions'>Code Quiz Challenge</h1>";
    innerText+=" <h2>Try to answer the following code-related questions within the time limit. <br>";
    innerText+="    Keep in mind that incorrect answers will penalize your score/time by 10 seconds!</h2>";
    innerText+="    <button id='startButton' onClick='myQuiz();'>Start Quiz</button>";
    innerText+="<h2 id='countdown'></h2>";
    innerText+="</div>";
    document.getElementById("quiz").innerHTML=innerText;
}

startingContent();

// *********** not using anything below his point **********





//questionCheck();

/*

questions[currentQuestion];

//Timer that counts down from 75
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if (timeLeft > 0) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;

    } else {

      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
      //show results page
    }
  }, 1000);
}; */

 // Show total at end
 //alert('You got ' + score + '/' + questions.length);


 /* var message =
 'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' '); */


//startButton.onclick = countdown;

//startButton.addEventListener("click", startButton); 
