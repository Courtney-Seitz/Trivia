$(document).ready(function(){
  console.log("Ready!");
  //hides intro text, leaves 'start' button visible
  $("#trivia").hide();
  //reveals intro text on click event, calls function for running game, fill value of button with 'start game'
  $("#startGame").on("click", beginGame); {
    $("#startGame").val("Start Game");
  }
  //question array starts at zero/beginning
  var currentQuestion = 0;
  //score starts at zero
  var score = 0;
  //function for event listener, shows intro text, starts game
  function beginGame() {
    $("#trivia").fadeIn("slow");
    if (currentQuestion < triviaQuestions.length) {
      $("p.questions").html(triviaQuestions[currentQuestion].question);
      //var selectionChoice = $("div.options").html(triviaQuestions[currentQuestion].selection);
      var selections = triviaQuestions[currentQuestion].selection;
      console.log(selections);
      var radioSelection = $("div.options");
      for (var i = 0; i < selections.length; i++) {
        console.log("looping");
        radioSelection.prepend('<label><input type="radio" name="radio_buttons" value="' + selections[i] +'"/>' + selections[i] + '</label>');

      }
      currentQuestion++;
    }
    //changes text of button to 'next question' as game begins
    if (currentQuestion > 0 ) {
      $("#startGame").val("Next Question");
    }
    //put in function here to have button show 'Play Again' text when quiz ends

  }
  //to-do: have selections show with radio buttons; have selections matched to correct or incorrect answers; show score; have button change to 'next question' and 'play again' at appropriate place within quiz;
  //question/answer array of an array stored in a variable
  var triviaQuestions = [

    {
      question: "Where did bananas originate?",
      selection: ["Southeast Asia", "The Caribbean", "The Grocery Store", "Morocco" ],
      correctSelection: 0
    },
    {
      question: "How is the banana plant classified botanically?",
      selection: ["Shrubbery", "Herb", "Tree", "Delicious"],
      correctSelection: 1
    },
    {
      question: "What do agriculturists call bananas growing together on a single stem?",
      selection: ["Fingerlings", "Toes", "Hands", "Legs"],
      correctSelection: 2
    },
    {
      question: "Into which of the following sub-categories does the banana fruit best fit?",
      selection: ["Nut", "Legume", "Sundae", "Berry"],
      correctSelection: 3
    },

  ];


});
