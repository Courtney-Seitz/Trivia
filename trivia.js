$(document).ready(function(){

});

//Psuedo-Code:
//click start button (wishlist - possibly seperate categories)??
//first question box appears, multiple choice (checkbox)
//user clicks/selects answer and clicks 'next', question box disappears, next question box appears...
//score is tabulated on screen with, wishlist - progress bar??
//wishlist - timer function? (during game)??
//add play again button

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

//...Scoring function...

function setScore() {
  var score = $('input:checked[value=correct]').length
  $('#score').text(score);
}

//Set score on input change...
$('input').change(setScore);

//Set score when initialized...
setScore();

//...Scoring function...
