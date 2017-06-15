
// As a user I don't have ships that touch, so that there is always space between ships.
// As a user I can torpedo two 3 block ships,, so that the game is diverse.
// As a user I can torpedo two 2 block ships, so that the game is diverse.
// As a user I can torpedo one 1 block submarine, so that the game is diverse.

// *******  Controler ******* //
$(document).ready(function(){
  createTable();
  createBoardArray();
  airCarrier()
  battleship()

  // aiBoats();
  var clickCount= 0;
  var hits = 0;
  var id;
  var missiles = 25
  // As a user when I click on a position, the position changes color so that I can tell that a position has been torpedoed.
  $("td").on("click",function(){
    id= $(this).attr("id")
    var splitId = id.toString().split("");

    // As a user I have a limit of 25 torpedoes to hit all ships, and when I run out I have lost the game, so that that game is a challenge.
    if (missiles >0) {
      // As a user once a position has been torpedoed, it cannot be torpedoed again so that I don't waste torpedoes.
      if (boardArray[splitId[0]][splitId[1]] === 5){
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        $("#"+id).css("background-color", "yellow");
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        alert("It's a HIT !!!!");
        hits++;
        missiles--;
      } // end of if statement
      else if (boardArray[splitId[0]][splitId[1]] !== 0 || boardArray[splitId[0]][splitId[1]] === 0) {
        boardArray[splitId[0]][splitId[1]] = 1; // changes the array to mark it as used
        $("#"+id).css("background-color", "blue");
        clickCount++;
        missiles--;
      }
    }
    else {
      // As a user if I lose, I can see where the ships were, so that I know there were actual ships on the board.
      alert("Game Over!");
      $(".boat").css("background-color", "black")
    }
    $("#missilesUsed").text(clickCount)
    $("#hits").text(hits)
    // As a user I can see how many torpedoes I have left instead of how many I have used.
    $("#remaining").text(missiles)

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

// making boats

function aiBoats() {
  for (var b = 0; b < 1; b++){
    var index1 = Math.floor(Math.random() *9);
    var index2 = Math.floor(Math.random() *9);
    var boat = boardArray[index1][index2];
    console.log(boat);
    while (boat !== 0){
        index1 = Math.floor(Math.random() *9);
        index2 = Math.floor(Math.random() *9);
        boat = boardArray[index1][index2];
    } //end of while
    boatTouch(index1, index2)
    boardArray[index1][index2] = 2;
    $("#" + index1 + index2).addClass("boat");
    // carrier
  } // end for loop
} // end Function


// As user I expect there to be 5 single length ships on the board.
//Carrier creation
function airCarrier(){
  var index1 = Math.floor(Math.random() *6);
  var index2 = Math.floor(Math.random() *6);
  var boat = boardArray[index1][index2];
  var vOrH = Math.round((Math.random() * 1))
  console.log(vOrH);
  if (vOrH === 0){
    for (var ac = 0; ac < 5; ac++){
      let carrier = 5;
      boardArray[index1][index2 + ac] = carrier;
      $("#" + index1 + (index2 + ac)).addClass("carrier")
    }
  }
  else {
    for (var ac = 0; ac < 5; ac++){
      let carrier = 5;
      boardArray[index1 + ac][index2] = carrier;
      $("#" + (index1 + ac) + index2).addClass("carrier")
    }
  }
}//end of Carrier creation

// As a user I can torpedo two 4 block ships, so that the game is diverse.
// Battleship creation
function battleship() {
  for(var z = 0; z < 2; z++){
    var index1 = Math.floor(Math.random() *7);
    var index2 = Math.floor(Math.random() *7);
    var boat = boardArray[index1][index2];
    var vOrH = Math.round((Math.random() * 1))
    console.log(vOrH);
    if (vOrH === 0){
      for (var ac = 0; ac < 4; ac++){
        let carrier = 6;
        boardArray[index1][index2 + ac] = carrier;
        $("#" + index1 + (index2 + ac)).addClass("battleship")
      }
    }
    else {
      for (var ac = 0; ac < 4; ac++){
        let carrier = 6;
        boardArray[index1 + ac][index2] = carrier;
        $("#" + (index1 + ac) + index2).addClass("battleship")
      }
    }
  }
}//end of Battleship creation

//out of bounds checker
// function boundCheck(i1, i2) {
//   if (i1 === 0 || i1 === 9 || i2 === 0 || i2 === 9 ) {
//    aiBoats()
//  }
//   // index1 = Math.floor(Math.random() *9);
//   // index2 = Math.floor(Math.random() *9);
// }//end of out of bounds check

//start of checking for touching boats
function boatTouch(i1, i2) {

  if (i1 === 0 && i2 === 0){
    boardArray[i1][i2 + 1] = 3;
    boardArray [i1 + 1][i2 +1] = 3;
    boardArray[i1 + 1][i2] = 3;
  }
  else if (i2 === 0){
    boardArray[i1 - 1][i2] = 3;
    boardArray[i1 - 1][i2 + 1] = 3;
    boardArray[i1][i2 + 1] = 3;
    boardArray [i1 + 1][i2 +1] = 3;
    boardArray[i1 + 1][i2] = 3;
  }
  else if (i1 === 9 && i2 === 0) {
    boardArray[i1 - 1][i2] = 3;
    boardArray[i1 - 1][i2 + 1] = 3;
    boardArray[i1][i2 + 1] = 3;
  }
  else if (i1 === 9) {
    boardArray [i1 - 1][i2 - 1] = 3;
    boardArray[i1 - 1][i2] = 3;
    boardArray[i1 - 1][i2 + 1] = 3;
    boardArray[i1][i2 + 1] = 3;
    boardArray[i1][i2 - 1] = 3;
  }
  else if (i1 === 9 && i2 === 8) {
    boardArray [i1 - 1][i2 - 1] = 3;
    boardArray[i1 - 1][i2] = 3;
    boardArray[i1][i2 - 1] = 3;
  }
  else if (i2 === 9) {
    boardArray [i1 - 1][i2 - 1] = 3;
    boardArray[i1 - 1][i2] = 3;
    boardArray[i1 + 1][i2] = 3;
    boardArray[i1 + 1][i2 - 1] = 3;
    boardArray[i1][i2 - 1] = 3;
  }
  else if (i1 === 0 && i2 === 9) {
    boardArray[i1 + 1][i2] = 3;
    boardArray[i1 + 1][i2 - 1] = 3;
    boardArray[i1][i2 - 1] = 3;
  }
  else if (i1 === 0){
    boardArray[i1][i2 + 1] = 3;
    boardArray [i1 + 1][i2 + 1] = 3;
    boardArray[i1 + 1][i2] = 3;
    boardArray[i1 + 1][i2 - 1] = 3;
    boardArray[i1][i2 - 1] = 3;
  }
  else {
    boardArray [i1 - 1][i2 - 1] = 3;
    boardArray [i1 - 1][i2] = 3;
    boardArray [i1 - 1][i2 + 1] = 3;
    boardArray [i1][i2 + 1] = 3;
    boardArray [i1 + 1][i2 + 1] = 3;
    boardArray [i1 + 1][i2] = 3;
    boardArray [i1 + 1][i2 - 1] = 3;
    boardArray [i1][i2 - 1] = 3;
  }
}// end of function for checking if boats touch
