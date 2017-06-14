

// As a user I have a limit of 25 torpedoes to hit all ships, and when I run out I have lost the game, so that that game is a challenge.

// As a user if I lose, I can see where the ships were, so that I know there were actual ships on the board.

// *******  Controler ******* //
$(document).ready(function(){
  createTable();
  createBoardArray();
  aiBoats();
  var clickCount= 0;
  var hits = 0;
  var id;
  var missiles = 25
  // As a user when I click on a position, the position changes color so that I can tell that a position has been torpedoed.
  $("td").on("click",function(){
    id= $(this).attr("id")
    var splitId = id.toString().split("");

    if (missiles >0) {
      // As a user once a position has been torpedoed, it cannot be torpedoed again so that I don't waste torpedoes.
      if (boardArray[splitId[0]][splitId[1]] === 2){
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        $("#"+id).css("background-color", "yellow");
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        alert("It's a HIT !!!!");
        hits++;
      } // end of if statement
      else if (boardArray[splitId[0]][splitId[1]] === 0) {
        boardArray[splitId[0]][splitId[1]] = 1; // changes the array to mark it as used
        $("#"+id).css("background-color", "blue");
        clickCount++;
        missiles--;
      }
    }
    else {
      alert("Game Over!");
    }
    $("#missilesUsed").text(clickCount)
    $("#hits").text(hits)

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

// creating the array that will log the board progress
function createBoardArray() {
  for (var i = 0; i < 10; i++) {
    boardArray[i] = []
    for(var j = 0; j < 10; j++) {
      boardArray[i][j]= 0
    } // end of first for loop
  } // end of second for loop
}

// As user I expect there to be 5 single length ships on the board.
// making boats
function aiBoats() {
  for (var b = 0; b < 5; b++){
    var index1 = Math.floor(Math.random() *9);
    var index2 = Math.floor(Math.random() *9);
    var boat = boardArray[index1][index2]
      if (boat === 2){
        boat = boardArray[Math.floor(Math.random() *9)][Math.floor(Math.random() *9)]
      } // end if statement
      else {
        boardArray[index1][index2] = 2;
        console.log(boardArray[index1],boat);
        $("#" + index1 + index2).css("background-color", "red");
      }
  } // end for loop
} // end Function
