$(document).ready(function(){

  var clickCounter = 0;
  var actualClicks = [];

$( "button" ).click(function() {
    $( this ).addClass( "tiles2" );
    $( this ).removeClass( "tiles1" );
    clickCounter++;
    actualClicks.push($( this ).text());
    $( this ).attr("disabled", "disabled");
    if (clickCounter % 2 === 0){
      if (actualClicks[0] !== actualClicks[1]) {
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

     function rearrangeTiles() {
        var scrambleTiles = $(".tiles1");
        for(var i = 0; i < scrambleTiles.length; i++){
        var target = Math.floor(Math.random() * scrambleTiles.length -1) + 1;
        var target2 = Math.floor(Math.random() * scrambleTiles.length -1) +1;
        scrambleTiles.eq(target).before(scrambleTiles.eq(target2));
        }
      }
});
