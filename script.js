$(document).ready(function(){

  var clickCounter = 0;
  var actualClicks = [];

  $( "button" ).click(function() {
    $( this ).addClass( "tiles2" );
    $( this ).removeClass( "tiles1" );
    clickCounter++;
    actualClicks.push($( this ).text());
    if (clickCounter % 2 === 0){
      if (actualClicks[0] !== actualClicks[1]) {
        console.log("try again!");
        $( this ).addClass( "tiles2" );
        $( this ).removeClass( "tiles1" );
        console.log(this);
      }
      else if (actualClicks[0] === actualClicks[1]) {
          console.log("you win!");
          actualClicks = [];
          $( this ).attr("disabled", "disabled");
      }
    };
  });
});

  // if clickcounter is 1 just flip dont do anything else\

  // if clickcounter is even
    // test to see if its a match, if it is
      // do nothing
    // if its not a match we want to flip the cards back over

  // if its odd
    // just flip
