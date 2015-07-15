$(document).ready(function(){

  var clickCounter = 0;
  var tileChoices = [];
  var TileChosen;

$( "button" ).click(function() {
    var TileChosen = this;
    $( this ).addClass( "tiles2" );
    $( this ).removeClass( "tiles1" );
    clickCounter++;
    tileChoices.push($( this ).html());
    $( this ).attr("disabled", "disabled");
      // if ($(".tiles2").attr("disabled", "disabled")){
      //   window.location.reload(true);
      // }
        if (tileChoices[0] === tileChoices[1]) {
           console.log("you win!");
           tileChoices = [];
           alert("you win!");
        } else if (clickCounter % 2 === 0){
           if (tileChoices[0] !== tileChoices[1]) {
             $("TileChosen").click( function() {
               $(this).css("background", "red");
              });
            alert("try again!");
          }}
        });
      });



    // $("#reset").click(window.onload);
    // window.onload = rearrangeTiles;
    //
    //  function rearrangeTiles() {
    //     var scrambleTiles = $(".tiles1");
    //     for(var i = 0; i < scrambleTiles.length; i++){
    //     var target = Math.floor(Math.random() * scrambleTiles.length -1) + 1;
    //     var target2 = Math.floor(Math.random() * scrambleTiles.length -1) +1;
    //     scrambleTiles.eq(target).before(scrambleTiles.eq(target2));
    //     }
    //   }
