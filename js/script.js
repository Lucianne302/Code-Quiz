var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startButton = document.getElementById('startButton');
var questionElement = document.getElementById('question');
var totalQuiztime=75; // starting time for the quiz
var score = 0;

var questions = [ // array with multiple objects for questions, choices, correct answers
    {
        question: "What does API stand for?", //Question
        choices: ["Applicable Product Interface", "Applicable Programming Interface", "Applicable Programming Insurance"], //multiple choice answers
        correct: "Applicable Programming Interface" //correct answer
    },
    {
        question: "Why is javascript called Richer Interface?",
        choices: ["Because you can include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors", "Because it include such items as learning components and slides to give a Rich Interface to your site visitors", "Because there are many things you can do with site visitors to get rich"], 
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

function checkTime(myTime){
    var timeLeft=myTime;
    sessionStorage.setItem("quizTimer",timeLeft);

    window.interval=setInterval(function(){
        timeLeft=sessionStorage.getItem("quizTimer");
        if (timeLeft>0){
            timerEl.innerHTML=timeLeft + ' seconds';
            timeLeft--;
            sessionStorage.setItem("quizTimer",timeLeft);
        } else {
            timerEl.innerHTML = ''
            clearInterval(interval);
            // show quiz results here
            // alert('You got ' + score + '/' + questions.length);
        }
    }, 1000);
}

function saveScore(){
    var oldScores=JSON.parse(localStorage.getItem('scores')) || []; //load old scores or set to null array if none
    var myScore={ // creating an object to hold the user/score/time of a quiz
        'user':document.getElementById("initials").value,
        'score':score,
        'time':sessionStorage.getItem("quizTimer")
    }
    oldScores.push(myScore);
    localStorage.setItem("scores", JSON.stringify(oldScores));
    showHScores('quiz');
};

function recScore(){
    var myScore="Congratulations!!! You got a "+score+" on the quiz.<br>";
    myScore+="<br>";
    myScore+="Please enter your initials: <input type='text' id='initials' maxlength='3' size='10'>";
    myScore+="<button id='confirm' onClick='saveScore();'>Confirm</button>"

    document.getElementById("quiz").innerHTML=myScore;
}

function questionCheck(currentQuestion,myAnswer) { // processes the question to check for correct answer
    var question = questions[currentQuestion]; //processes a single question 
    console.log(question);
    if(question.correct === myAnswer.textContent) {  // proceses correct answer
        alert("Correct!"); //displays correct answer 
        score++; // increases score
        currentQuestion++; // incremenets current question
        console.log("Score: "+score);
        if (currentQuestion<questions.length){
            getQuestions(currentQuestion);
        } else {
            // end quiz and allow user to enter initials with score
            clearInterval(interval);
            recScore();
        }
    } else {
        alert("Incorrect!");  // displays incorrect answer
        currentQuestion++; // incremenets current question
        console.log("Score: "+score);
        var timeLeft=sessionStorage.getItem("quizTimer");
        sessionStorage.setItem("quizTimer",timeLeft-10); // decreases timer by 10 seconds
        if (currentQuestion<questions.length){
            getQuestions(currentQuestion);
        } else {
            // end quiz and allow user to enter initials with score
            clearInterval(interval);
            recScore();
        }
    }

    if (currentQuestion === question.length) { // loops the questions
        //show highscore page
    }
} 

function getQuestion(currentQuestion) { // processes the currentQuestion
    var myQuestion = questions[currentQuestion]; //gets current question
    console.log(myQuestion);
    document.getElementById("question").innerHTML = myQuestion.question; // replaces the inner HTML of question with the current question
    var myChoices="" //initializes variable
    for( var i=0;i<myQuestion.choices.length;i++){ // looping over question choices
        console.log(myQuestion.choices[i]);
        myChoices+="<li><button id='choicesBtn' onClick='questionCheck(this);'>"+myQuestion.choices[i]+"</button></li>"; //create a list of my choices

    }
    console.log(myChoices);

    document.getElementById("choices").innerHTML = myChoices; // replaces the inner HTML with myChoices
};

function getQuestions(currQuestion){
    var myQuestion = questions[currQuestion]; //gets current question

    console.log(myQuestion);
    document.getElementById("question").innerHTML = "#"+(currQuestion+1)+" "+myQuestion.question; // replaces the inner HTML of question with the current question
    var myChoices="" //initializes variable
    for( var i=0;i<myQuestion.choices.length;i++){ // looping over question choices
        console.log(myQuestion.choices[i]);
        myChoices+="<li><button id='choicesBtn' onClick='questionCheck("+currQuestion+",this);'>"+myQuestion.choices[i]+"</button></li>"; //create a list of my choices

    }
    console.log(myChoices);    
    document.getElementById("choices").innerHTML = myChoices; // replaces the inner HTML with myChoices
}

function myQuiz(){ //replaces the starting content with myQuiz
    var quizSections="<section class='questions' id='questions'>"; // setting up quiz content
    quizSections+="<h3 class='question' id='question'></h3>";
    quizSections+="<ol class='choices' id='choices'></ol>";
    quizSections+="</section>";
    document.getElementById("quiz").innerHTML=quizSections; //replacing inner HTML contant of the quiz element with quizSections

    var currQuestion=0;
    checkTime(totalQuiztime);
    getQuestions(currQuestion);
}

function startingContent(){
    var innerText="<div class='container'>"; // setting up start page content
    innerText+="<h1 class='instructions'>Code Quiz Challenge</h1>"; 
    innerText+=" <h2>Try to answer the following code-related questions within the time limit. <br>";
    innerText+="    Keep in mind that incorrect answers will penalize your score/time by 10 seconds!</h2>";
    innerText+="    <button id='startButton' onClick='myQuiz();'>Start Quiz</button>"; //start quiz button calls myQuiz 
    innerText+="<h2 id='countdown'></h2>";
    innerText+="</div>";
    document.getElementById("quiz").innerHTML=innerText; //replacing inner HTML contant of the quiz element with inner text
}

startingContent(); //calling start content function

// *********** not using anything below his point **********

/* function countdown() { //sets timer countdown from 75
  var timer = 75; // sets timer to 75

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
};

*/

//startButton.onclick = countdown;

//button.addEventListener("click", startButton); 

