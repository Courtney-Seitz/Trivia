$(document).ready(function(){
  console.log("Ready!");
  //question array starts at zero/beginning
  var currentQuestion = 0;
  //score starts at zero
  var score = 0;
  var index = 0;
  var start = $("#startGame");
  var radio = $("radio_buttons");
  var radioSelection = $("div.options");
  var intro = $(".intro");
  var selections = triviaQuestions[currentQuestion].selection;
  //hides intro text, leaves 'start' button visible
  intro.hide();
  //reveals intro text on click event, calls function for running game, fill value of button with 'start game'
  start.on("click", beginGame); {
  start.val("Start Game");
  }

  //function for event listener, shows intro text, starts game
  function beginGame() {
    intro.fadeIn("slow");
    if (currentQuestion < triviaQuestions.length) {
      start.val("Next Question")
      $("p.questions").html(triviaQuestions[currentQuestion].question);
      //var selectionChoice = $("div.options").html(triviaQuestions[currentQuestion].selection);

      //console.log(selections);
      for (var i = 0; i < selections.length; i++) {
        radioSelection.html('<div class="optionsList"><label><input type="radio" id="radio_buttons" value="' + selections[i] +'"/>' + selections[i] + '</label></div>');
      }
if (currentQuestion == triviaQuestions.length - 1) {
start.val("Submit");
} else if (currentQuestion > triviaQuestions.length - 1) {
  console.log("I'm a placeholder for scoring function")
}


//      currentQuestion++;
    }

    //put in function here to have button show 'Play Again' text when quiz ends

  }


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
