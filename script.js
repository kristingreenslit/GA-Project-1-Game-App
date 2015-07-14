$(document).ready(function(){

var tilesChosen = [];
var clickCounter = 0;

$( "button" ).click(function() {
  $( this ).toggleClass( "tiles2" );
  clickCounter++;
  tilesChosen.push( this );
  $( this ).attr("disabled", "disabled");
  console.log(tilesChosen);
  for (var i = 0; i <= tilesChosen.length; i++){
    if ( $( tilesChosen[i] ).hasClass( "tiles2"[i] )){
      console.log("yes");
    } else console.log("no");
  }
});

});
