$(document).ready(function(){

  var clickCounter = 0;
  var tilesChosen = [];

$( "button" ).click(function() {
    $( this ).addClass( "tiles2" );
    $( this ).removeClass( "tiles1" );
    clickCounter++;
    tilesChosen.push($( this ).html());
    $( this ).attr("disabled", "disabled");
      // if ($(".tiles2").attr("disabled", "disabled")){
      //   window.location.reload(true);
      // }
        if (tilesChosen[0] === tilesChosen[1]) {
           console.log("you win!");
           tilesChosen = [];
           alert("you win!");
        } else if (clickCounter % 2 === 0){
           if (tilesChosen[0] !== tilesChosen[1]) {
        // $( tilesChosen ).addClass( "tiles2" );
           $( ".tiles1" ).removeClass(".tiles2");
           alert("try again!");
        };
           console.log(tilesChosen);
      }
    });
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
