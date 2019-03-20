$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Random # 1-12 for jewels 
    var Total= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
  $('#Wins').text(wins);
  $('#Losses').text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        Total= 0;
        $('#finalTotal').text(Total);
        } 
  // Adds the wins to the userTotal
  function win(){
  alert("You won!");
    wins++; 
    $('#Wins').text(wins);
    reset();
  }
  // Adds the losses to the userTotal
  function lose(){
  alert ("You lost!");
    losses++;
    $('#Losses').text(losses);
    reset()
  }
  // Sets up click for jewels
    $('#Blue').on ('click', function(){
      Total = Total + num1;
      console.log("New Total= " + Total);
      $('#finalTotal').text(Total); 
            // Win Lose set up
          if (Total == Random){
            win();
          }
          else if (Total > Random){
            lose();
          }   
    })  
    $('#Green').on ('click', function(){
      Total = Total + num2;
      console.log("New Total= " + Total);
      $('#finalTotal').text(Total); 
          if (Total == Random){
            win();
          }
          else if ( Total > Random){
            lose();
          } 
    })  
    $('#Red').on ('click', function(){
      Total = Total + num3;
      console.log("New Total= " + Total);
      $('#finalTotal').text(Total);

  // Win or Lose

            if (Total == Random){
            win();
          }
          else if (Total > Random){
            lose();
          } 
    })  
    $('#Yellow').on ('click', function(){
      Total = Total + num4;
      console.log("New Total= " + Total);
      $('#finalTotal').text(Total); 
        
            if (Total == Random){
            win();
          }
          else if (Total > Random){
            lose();
          }
    });   
  }); 