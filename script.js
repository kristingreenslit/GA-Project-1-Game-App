$(document).ready(function(){

var tilesChosen = [];
var arr2 = [];
var clickCounter = 0;

$( "button" ).click(function() {
  $( this ).toggleClass( "tiles2" );
  clickCounter++;
  tilesChosen.push( this );
  $( this ).attr("disabled", "disabled");
  console.log(tilesChosen);
});



for (var i = 0; i <= tilesChosen.length; i++){
  checkChoices = tilesChosen[i];
  if ( checkChoices[i].Id == arr2[j].Id ){
    console.log("yes")
  } else console.log("no");

};
  // if ( $( this ).hasClass( tiles2[i] )


// var match = $("#id1").html() === $("#id2").html();
// function determineMatch(){
//   if ()
// }


});
