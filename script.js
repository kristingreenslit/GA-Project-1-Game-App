// $(document).ready(function(){

  var clickCounter = 1;
  var tileChoiceText = [];
  var tileChoice1;
  var tileChoice2;

$( "button" ).click(function() {
    tileChoiceText.push($(this).text());
    $( this ).attr("disabled", "disabled");
    $( this ).addClass( "tiles2" );
    $( this ).removeClass( "tiles1" );
    console.log(this);
      if (clickCounter % 2 === 1) {
        tileChoice1 = $(this).attr("id");
        clickCounter++;
      }
      else if (clickCounter % 2 === 0){
        tileChoice2 = $(this).attr("id");
          if (tileChoiceText[0] !== tileChoiceText[1]) {
             tileChoice1.addClass( "tiles1" );
             tileChoice1.removeClass( "tiles2" );
             tileChoice2.addClass( "tiles1" );
             tileChoice2.removeClass( "tiles2" );
            alert("try again!");
          }
        }
      });

    console.log(tileChoiceText);

        else if (tileChoiceText[0] === tileChoiceText[1]) {
           console.log("you win!");
           tileChoiceText = [];
           alert("you win!");
        }

      });

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
