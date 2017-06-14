



// As a user once a position has been torpedoed, it cannot be torpedoed again so that I don't waste torpedoes.


// *******  Controler ******* //
$(document).ready(function(){
  createTable()
  var clickCount= 0
  var id
  // As a user when I click on a position, the position changes color so that I can tell that a position has been torpedoed.
  $("td").on("click",function(){
    id= $(this).attr("id")
    $("#"+id).css("background-color", "tomato")
    // As a user I can see how many torpedoes I have used, so that I can keep track
    clickCount++
    $("#missilesUsed").text(clickCount)
  })//end of click change color
})

 // end of Doc Ready

// *******  Model ******* //


// As a user I can see a 10 x 10 grid so that I can see the gameboard.
var boardArray = []
function createTable() {
  $("#boardGame").append("<table id='boardTable'></table>");
    for (var i = 0; i < 10; i++) {
      $("#boardTable").append("<tr id="
      + i + " class='boardRow'></tr>");
      for(var j = 0; j < 10; j++) {
        $("#" + i).append("<td id=" + i + j + " class='boardCell' ></td>");
      } // end for loop to create the columns
    } // end for loop to create the rows
} // end of function createTable

function createBoardArray() {
    for (var i = 0; i < 10; i++) {
      boardArray[i] = 0
      for(var j = 0; j < 10; j++) {
        boardArray[i][j]= 0
        console.log(boardArray)
      }
    }
}
createBoardArray()
