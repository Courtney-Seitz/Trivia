$(document).ready(function(){
  console.log("Ready!");
  //question array starts at zero/beginning
  var currentQuestion = 0;
  //score starts at zero
  var score = 0;
  index = 0
  //hides intro text, leaves 'start' button visible
  $(".intro").hide();
  //reveals intro text on click event, calls function for running game, fill value of button with 'start game'
  $("#startGame").on("click", beginGame); {
    $("#startGame").val("Start Game");
  }
  //function for event listener, shows intro text, starts game
  function beginGame() {
    console.log("Begin!");
    $("#trivia .totalScore").remove();
    $(".intro").fadeIn("slow");
    if (currentQuestion < triviaQuestions.length) {
      $("#startGame").val("Next Question")
      $("#questionBox").remove();
      $(".optionsList").remove();
      $("p.questions").append('<p id="questionBox">' + triviaQuestions[currentQuestion].question + '</p>');
      $("p.options").append("<p id='quizBox'>");
      var selections = triviaQuestions[currentQuestion].selection;
      //  console.log(selections);
      for (var i = 0; i < selections.length; i++) {
        $("#quizBox").append("<label><div class='optionsList'><input class='selectRadio' type='radio' name='" + selections[i] +"'/>" + selections[i] + '<br /></div></label>');
      }
      $("#startGame").prepend("</p>");

      $("div.optionsList").on("click",".selectRadio", function() {
        console.log("optionsList click event");
        console.log($(this).attr("name"));
        console.log("currentQuestion: "+currentQuestion);
        console.log( $(this).attr("name").trim() );
        console.log( triviaQuestions[currentQuestion-1].correctSelection );
        if ($(this).attr("name").trim() === triviaQuestions[currentQuestion-1].correctSelection) {
          score++;
          console.log("score: "+score);
         }
      });
      currentQuestion++;
    }
    else {
      //$("p.questions").remove();
      //$("p.options").remove();
      $("#questionBox").remove();
      $(".optionsList").remove();
      $("#startGame").before('<h2 class="totalScore"> Final score: ' + score + ' / 4 questions corrrect.</h2>');
      $("#startGame").val("Play Again");
      //$("#startGame").remove();
      //$("#playAgain").show();

    }
  }
  //question/answer array of an array stored in a variable
  var triviaQuestions = [
    {
      question: "Where did bananas originate?",
      selection: [" Southeast Asia ", " The Caribbean ", " The Grocery Store ", " Morocco " ],
      correctSelection: "Southeast Asia"
    },
    {
      question: "How is the banana plant classified botanically?",
      selection: ["Shrubbery", "Herb", "Tree", "Delicious"],
      correctSelection: "Herb"
    },
    {
      question: "What do agriculturists call bananas growing together on a single stem?",
      selection: ["Fingerlings", "Toes", "Hands", "Legs"],
      correctSelection: "Hands"
    },
    {
      question: "Into which of the following sub-categories does the banana fruit best fit?",
      selection: ["Nut", "Legume", "Sundae", "Berry"],
      correctSelection: "Berry"
    },

  ];

});
