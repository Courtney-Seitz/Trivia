$(document).ready(function(){
})

// click start button (possibly seperate categories)
//first question box appears, multiple choice (checkbox)
//user clicks/selects answer, question box disappears, next question box appears...
//score is tabulated on screen with progress bar?
//timer function? (during game)?
//end of quiz display score and time?

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

//attach a click listener to the HTML element with the id of 'next'
$('.next').click(function() {

//current question disappears...
$($question.get(currentQuestion)).fadeOut(function() {

//questions go up one by one
currentQuestion = currentQuestion + 1;

//if (currentQuestion == totalNumQuestions) {
//var result = sum_values()
//alert(result);
//}
//else
//{
//otherwise show the next question
$($question.get(currentQuestion)).fadeIn();

});
});
//});
