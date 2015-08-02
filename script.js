$(document).ready(function(){

  var clickCounter = 0;
  var userCorrectGuesses = 0;
  var userIncorrectGuesses = 0;
  var userClicks = [];
  var elementsClicked = [];

  $( "#reset" ).click(function(){
    window.location.reload(true)
  })

  $( "button" ).click(function() {
      userClicks.push($( this ).html());
      $( this ).attr("disabled", "disabled"); // prevents user from accidental click on the same tile
      $( this ).addClass( "tiles2" );
      $( this ).removeClass( "tiles1" );
      elementsClicked.push( this );
      if (clickCounter === 1){
           clickCounter = -1;
           if (userClicks[0] !== userClicks[1]) {
               setTimeout(flipBack, 250);
               userIncorrectGuesses++;
               document.getElementById("incorrect-guesses").innerHTML = "Incorrect = " + userIncorrectGuesses;
           } else if (userClicks[0] === userClicks[1]) {
               console.log("you win!");
               $(elementsClicked[1]).css("visibility","hidden");
               $(elementsClicked[0]).css("visibility","hidden");
               userClicks = [];
               elementsClicked = [];
               userCorrectGuesses++;
               document.getElementById("correct-guesses").innerHTML = "Correct = " + userCorrectGuesses;
           }
      }
      clickCounter++;
    });

  function flipBack(){
    $(elementsClicked[0]).addClass("tiles1").removeClass("tiles2").removeAttr("disabled");
    $(elementsClicked[1]).addClass("tiles1").removeClass("tiles2").removeAttr("disabled");
    userClicks = [];
    elementsClicked = [];
  }


    // $("#reset").click(window.onload);
//     window.onload = rearrangeTiles;
//
//      function rearrangeTiles() {
//         var scrambleTiles = $(".tiles1");
//         var quantityTiles = scrambleTiles.length -1;
//         for(var i = 0; i < scrambleTiles.length; i++){
//         var target = Math.floor(Math.random() * quantityTiles) + 1;
//         var target2 = Math.floor(Math.random() * quantityTiles) + 1;
//         scrambleTiles.eq(target).before(scrambleTiles.eq(target2));
//         }
//       }
});
