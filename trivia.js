//Psuedo-Code:
//click start button
//wishlist - possibly separate categories
//first question box appears, multiple choice
//user clicks/selects answer and clicks 'next', question box disappears, next question box appears...
//score is tabulated on screen
//wishlist - progress bar
//wishlist - timer function
//wishlist - add play again button

$(document).ready(function(){
  $(".again").hide();
  $(".questionContainer").hide();
  $(".next").hide();
  $(".scoreDisplay").hide();
});

//Start function, unhide questions, other buttons
$(".startGame").click(function() {
  $(".questionContainer").show();
  $(".next").show();
  $(".scoreDisplay").show();
});

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

// Nice job of commenting!

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

//Scoring function
function setScore() {
  var score = $('input:checked[value=correct]').length
  $('#score').text(score);
}

//Set score on input change (as user selects the correct answer)...
$('input').change(setScore);

//Set score when initialized...
setScore();
// Anything you want to happen on initialization should probably go in $(document).ready
