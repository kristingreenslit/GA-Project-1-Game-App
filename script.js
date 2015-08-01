$(document).ready(function(){

  var clickCounter = 0;
  var actualClicks = [];
  var elementsClicked = [];

$( "button" ).click(function() {
    actualClicks.push($( this ).html());
    $( this ).attr("disabled", "disabled"); // prevents user from accidental click on the same tile
    $( this ).addClass( "tiles2" );
    $( this ).removeClass( "tiles1" );
    elementsClicked.push( this );
    if (clickCounter === 0){

    }
    if (clickCounter === 1){
         clickCounter = -1;
         if (actualClicks[0] !== actualClicks[1]) {
             setTimeout(flipBack, 1000);
             console.log("try again!");
         } else if (actualClicks[0] === actualClicks[1]) {
             console.log("you win!");
             $(elementsClicked[1]).css("visibility","hidden");
             $(elementsClicked[0]).css("visibility","hidden");
             actualClicks = [];
             elementsClicked = [];
         }
    }
    clickCounter++;
  });

  function flipBack(){
    $(elementsClicked[0]).addClass("tiles1").removeClass("tiles2").removeAttr("disabled");
    $(elementsClicked[1]).addClass("tiles1").removeClass("tiles2").removeAttr("disabled");
    actualClicks = [];
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
