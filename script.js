$(document).ready(function(){

  var clickCounter = 0;
  var actualClicks = [];

$( "button" ).click(function() {
  // this logic looks really great! I think you're really close to flipping them back over in an incorrect result
    $( this ).addClass( "tiles2" );
    $( this ).removeClass( "tiles1" );
    clickCounter++;
    actualClicks.push($( this ).text());
    $( this ).attr("disabled", "disabled");
    if (clickCounter % 2 === 0){
      if (actualClicks[0] !== actualClicks[1]) {
        // i think you need to select the last two cards that were selected and then change the properties to be facedown again
        $( this ).addClass( "tiles2" );
        $( this ).removeClass( "tiles1" );
        alert("try again!");
      }
      else if (actualClicks[0] === actualClicks[1]) {
        console.log("you win!");
        actualClicks = [];
        alert("you win!");
      }
    }
  });

    // $("#reset").click(window.onload);
    window.onload = rearrangeTiles;
// code indentation for lines 29 and on need to be retooled to match the scheme of the rest of the code base
     function rearrangeTiles() {
       // i really like this function that randomizes all the tiles!
        var scrambleTiles = $(".tiles1");
        for(var i = 0; i < scrambleTiles.length; i++){
        var target = Math.floor(Math.random() * scrambleTiles.length -1) + 1;
        var target2 = Math.floor(Math.random() * scrambleTiles.length -1) +1;
        scrambleTiles.eq(target).before(scrambleTiles.eq(target2));
        }
      }
});
