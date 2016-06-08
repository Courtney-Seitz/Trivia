$(document).ready(function(){
})

//Psuedo-Code:
//click start button (wishlist - possibly seperate categories)??
//first question box appears, multiple choice (checkbox)
//user clicks/selects answer and clicks 'next', question box disappears, next question box appears...
//wishlist - score is tabulated on screen with progress bar??
//wishlist - timer function? (during game)??
//wishlist - end of quiz display score and time??

//Total number of questions
var totalNumQuestions = $('.question').size();

//Display current question, sets it at first question
var currentQuestion = 0;

//jQuery variable
$question = $('.question');

//Hide all of the questions
$question.hide();

//Show the first question
$($question.get(currentQuestion)).fadeIn();

//Click listener to get next question...
$('.next').click(function() {

//Current question disappears...
$($question.get(currentQuestion)).fadeOut(function() {

//Questions go up one by one
currentQuestion = currentQuestion + 1;

//Next question...
$($question.get(currentQuestion)).fadeIn();



});

});

//...Scoring...wants this in jQuery, eventually...

function totalScore() {

var score = 0;

var checkedAnswer;

var answers = document.getElementsByClassName('.answers');

var numberOfAnswers = answers.length;

for(var i = 0; i < answers.length; i++)

checkedAnswer = answers[i].options[answers[i].selectedIndex].value;

if(checkedAnswer=== "correct") {

  correct++;

}

document.getElementsByClassName("results").innerHTML = (100/"numberOfAnswers") * 'correct';

}
// });
// });
// });



//...Scoring...
