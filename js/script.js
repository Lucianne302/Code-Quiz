var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questionElement = document.getElementById;
var currentQuestion= 0;
var score = 0;

questions[currentQuestion];
/* var questions = [
    { q: 'The sky is blue.', a: 't' },
    { q: 'There are 365 days in a year.', a: 't' },
    { q: 'There are 42 ounces in a pound.', a: 'f' },
    { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    { q: 'Bananas are vegetables.', a: 'f' }
  ];

 var answers = [
    { a: 'The sky is blue.', a: 't' },
    { a: 'There are 365 days in a year.', a: 't' },
    { a: 'There are 42 ounces in a pound.', a: 'f' },
    { a: 'The Declaration of Independence was created in 1745.', a: 'f' },
    { a: 'Bananas are vegetables.', a: 'f' }
]; */ 

//tutor suggests 
var questions = [
    {
        [
            {
            question: "q1",
            choice: [c1, c2, c3],
            correct: "answer"
            }
        ]
    }
  ]; 

// Timer that counts down from 5
function countdown() {
  var timeLeft = 30;

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

/* Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}; */

function getQuestion() {
    console.log("hElLo 1352")
    var question = question[currentQuestion];
    document.getElementById("question").textContent = question.question
    answerList.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
        questions.choices[i];
        var newItem = document.createElement("li");
        newItem.textContent = question.choice[i];
        answerList.appendChild(newItem);
        newItem.addEventListener("click", questionCheck);
    }
};


function questionCheck() {
    var question = questions[currentQuestion];
    console.log(this);
    if(question.correct === this.textContent) {
        //increase score
    } else {
        //if incorrect, decrease score
    }

    currentQuestion++
    if (currentQuestion === question.length) {
        //show highscore page
    }
    getQuestion();
}
    


getQuestion();




 // Loop over every question object
 for (var i = 0; i < questions.length; i++) {
   // Display current question to user and ask OK/Cancel
   var answer = confirm(questions[i].q);

   // Compare answers
   if (
     (answer === true && questions[i].a === 't') ||
     (answer === false && questions[i].a === 'f')
   ) {
     // Increase score
     score++;
     alert('Correct!');
   } else {
     alert('Wrong!');
   }
 };

 // Show total at end
 alert('You got ' + score + '/' + questions.length);


 var message =
 'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' ');


//startBtn.onclick = countdown;  ------- not used

startButton.addEventListener("click", timer); 
