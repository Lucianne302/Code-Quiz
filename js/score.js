function scoreSort(a, b) {
    const scoreA = a.score;
    const scoreB = b.score;
  
    let comparison = 0;
    if (scoreA > scoreB) {
      comparison = 1;
    } else if (scoreA < scoreB) {
      comparison = -1;
    }
    return comparison * -1;
}

function showHScores(mySection){ // retrieve objects from local storage and display inside of quiz and include a button to start the quiz over
    var highScores="";
    var myScore = JSON.parse(localStorage.getItem("scores"));
    console.log("High Scores: "+myScore);

    myScore.sort(scoreSort); // sort high scores in descending order

    for (i=0;i<myScore.length;i++){
        highScores+="<li><b>Initials:</b> "+myScore[i].user+" <b>Score:</b> "+myScore[i].score+" <b>Time:</b> "+myScore[i].time+"</li>";
    }
    document.getElementById(mySection).innerHTML="<h2>High Scores:</h2> <br><ol>"+highScores+"</ol>";    
}