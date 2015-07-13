$(document).ready(function(){

  // $( "button" ).hover(
  //   function() {
  //     $( this ).addClass( ".tiles1" );
  //   }, function() {
  //     $( this ).removeClass( ".tiles2" );
  //   }
  // );

  $( "button" ).hover(function() {
    $( this ).fadeOut( 1000 );
    $( this ).fadeIn( 1000 );
  });
// var x = $("button").click();
//
  $( "#box1" ).toggleClass(function() {
    if ( $( this ).parent().is( "#buttons1" ) ) {
      console.log("happy");
    } else {
      console.log("sad");
    }
  });

// user clicks on first square
// > event listener for button click

// function randomColorChange(){
//
// }

// var a = $
// $("button").click(function(){
//   $(".tiles1").addClass(".tiles2");
//   $(".tiles1").removeClass(".tiles1");
//   console.log(this);
// });

// $(".tiles2").click(function(){
//   $(this).removeclass();
//   console.log("this");
// });

// first square content is revealed
// > on click reveal button content
//
// user clicks on second square
// >event listener for button click
//
// second square content is revealed
// >on click reveal button content
//
// if squares match, player wins match and green checkmark appears over squares
// >boolean for a winning play
// >visually represent a successful match
//
// if squares don't match, both squares flip back to hidden state
// >boolean for a non-winning play
// >visually represent "try again"
});
