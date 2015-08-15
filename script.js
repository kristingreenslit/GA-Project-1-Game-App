$(document).ready(function(){

  var clickCounter = 0;
  var userCorrectGuesses = 0;
  var userIncorrectGuesses = 0;
  var userClicks = [];
  var elementsClicked = [];

  $("#reset").click(function() {
    window.location.reload(true);
  });

  $( "button" ).click(function() {
      userClicks.push($( this ).html());
      $( this ).attr("disabled", "disabled"); // prevents user from accidental click on the same tile
      $( this ).addClass( "reveal" );
      $( this ).removeClass( "conceal" );
      elementsClicked.push( this );
      if (clickCounter === 1){
           clickCounter = -1;
           if (userClicks[0] !== userClicks[1]) {
               setTimeout(flipBack, 250);
               userIncorrectGuesses++;
               document.getElementById("incorrect-guesses").innerHTML = "Incorrect Guesses = " + userIncorrectGuesses;
           } else if (userClicks[0] === userClicks[1]) {
               console.log("you win!");
               $(elementsClicked[1]).css("visibility","hidden");
               $(elementsClicked[0]).css("visibility","hidden");
               userClicks = [];
               elementsClicked = [];
               userCorrectGuesses++;
               document.getElementById("correct-guesses").innerHTML = "Correct Guesses = " + userCorrectGuesses;
           }
      }
      clickCounter++;
    });

  function flipBack(){
    $(elementsClicked[0]).addClass("conceal").removeClass("reveal").removeAttr("disabled");
    $(elementsClicked[1]).addClass("conceal").removeClass("reveal").removeAttr("disabled");
    userClicks = [];
    elementsClicked = [];
  }

});
