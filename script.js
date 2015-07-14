$(document).ready(function(){

var tilesChosen = [];

$( "button" ).click(function() {
  $( this ).toggleClass( "tiles2" );
  tilesChosen.push(this);
  console.log(tilesChosen);
});

// for (i = 0; i < 2; i++) {
//     console.log("hi");
// }






});
