

// As a user when I click on a position, the position changes color so that I can tell that a position has been torpedoed.

// As a user I can see how many torpedoes I have used, so that I can keep track of how many I have used.

// As a user once a position has been torpedoed, it cannot be torpedoed again so that I don't waste torpedoes.


// *******  Controler ******* //
$(document).ready(function(){
  createTable()
})

 // end of Doc Ready

// *******  Model ******* //


// As a user I can see a 10 x 10 grid so that I can see the gameboard.
function createTable() {
  $("#boardGame").append("<table id='boardTable'></table>");
    for (var i = 0; i < 10; i++) {
      $("#boardTable").append("<tr id="
      + i + " class='boardRow'></tr>");
      for(var j = 0; j < 10; j++) {
        $("#" + i).append("<td id=" + i + j + " class='boardCell'></td>");
      } // end for loop to create the columns
    } // end for loop to create the rows
} // end of function createTable
