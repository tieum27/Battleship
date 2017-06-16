
// As a user I don't have ships that touch, so that there is always space between ships.

// As a user I can torpedo two 2 block ships, so that the game is diverse.
// As a user I can torpedo one 1 block submarine, so that the game is diverse.

// *******  Controler ******* //
$(document).ready(function(){
  createTable();
  createBoardArray();
  airCarrier()
  battleship()
  cruiser()
  submarine()
  detroyer()
  mine();

  var clickCount= 0;
  var hits = 0;
  var id;
  var missiles = 50;
  var count5 = 0;
  var count6 = 0;
  var count7 = 0;
  var count8 = 0;
  var count9 = 0;
  var count10 = 0;
  var count11 = 0;
  var count12 = 0;

  // As a user when I click on a position, the position changes color so that I can tell that a position has been torpedoed.
  $("td").on("click",function(){
    id= $(this).attr("id")
    var splitId = id.toString().split("");

    // As a user I have a limit of 25 torpedoes to hit all ships, and when I run out I have lost the game, so that that game is a challenge.
    if (missiles >0) {
      // As a user once a position has been torpedoed, it cannot be torpedoed again so that I don't waste torpedoes.
      if (boardArray[splitId[0]][splitId[1]] === 5){
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        hits++;
        missiles--;
        count5++;
        alert("It's a HIT !!!!");
        $("#" + id).css("background-color", "red")
        if (count5 === 5){
          alert("You sunk the Aircraft Carrier!!")
          $("#destroyed").append("<p>Aircraft Carrier</p>")


        }
      } // end of if statement
      else if (boardArray[splitId[0]][splitId[1]] === 6) {
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        hits++;
        missiles--;
        count6++;
        alert("It's a HIT !!!!");
        $("#" + id).css("background-color", "red")
        if (count6 === 4){
          alert("You sunk the Battleship!!")
          $("#destroyed").append("<p>Battleship 1</p>")
        }
      }
      else if (boardArray[splitId[0]][splitId[1]] === 7) {
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        hits++;
        missiles--;
        alert("It's a HIT !!!!");
        $("#" + id).css("background-color", "red")
        count7++;
        if (count7 === 4){
          alert("You sunk the Battleship!!")
          $("#destroyed").append("<p>Battleship 2</p>")
        }
      }
      else if (boardArray[splitId[0]][splitId[1]] === 8) {
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        hits++;
        missiles--;
        alert("It's a HIT !!!!");
        $("#" + id).css("background-color", "red")
        count8++;
        if (count8 === 3){
          alert("You sunk the Cruiser!!")
          $("#destroyed").append("<p>Cruiser</p>")
        }
      }
      else if (boardArray[splitId[0]][splitId[1]] === 9) {
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        hits++;
        missiles--;
        alert("It's a HIT !!!!");
        $("#" + id).css("background-color", "red")
        count9++;
        if (count9 === 3){
          alert("You sunk the Submarine!!")
          $("#destroyed").append("<p>Submarine</p>")
        }
      }
      else if (boardArray[splitId[0]][splitId[1]] === 10) {
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        hits++;
        missiles--;
        alert("It's a HIT !!!!");
        $("#" + id).css("background-color", "red")
        count10++;
        if (count10 === 2){
          alert("You sunk the Destroyer!!")
          $("#destroyed").append("<p>Destroyer</p>")
        }
      }
      else if (boardArray[splitId[0]][splitId[1]] === 11) {
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        hits++;
        missiles--;
        alert("It's a HIT !!!!");
        $("#" + id).css("background-color", "red")
        count11++;
        if (count11 === 2){
          alert("You sunk the Destroyer!!")
          $("#destroyed").append("<p>Destroyer</p>")
        }
      }
      else if(boardArray[splitId[0]][splitId[1]] === 12) {
        clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
        // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
        hits++;
        missiles--;
        alert("It's a HIT !!!!");
        $("#" + id).css("background-color", "red")
        count12++;
        (count12 === 1)
          alert("You blew up the Mine!!")
          $("#destroyed").append("<p>Mine</p>")
      }
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
      $(".carrier").css("background-color", "green")
      $(".battleship").css("background-color", "orange")
      $(".submarine").css("background-color", "brown")
      $(".cruiser").css("background-color", "purple")
      $(".destroyer").css("background-color", "darkgrey")
      $(".mine").css("background-color", "black")
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


// As user I expect there to be 5 single length ships on the board.
//Carrier creation
function airCarrier(){
  var index1 = Math.floor(Math.random() *6);
  var index2 = Math.floor(Math.random() *6);
  var boat = boardArray[index1][index2];
  var vOrH = Math.round((Math.random() * 1))
  if (vOrH === 0){
    for (var ac = 0; ac < 5; ac++){
      //boatTouch(index1, (index2 + ac))
      let carrier = 5;
      boardArray[index1][index2 + ac] = carrier;
      $("#" + index1 + (index2 + ac)).addClass("carrier")
      $("#" + index1 + (index2+ ac)).addClass("boatHere");
    }
  }
  else {
    for (var ac = 0; ac < 5; ac++){
      //boatTouch((index1 + ac), (index2))
      let carrier = 5;
      boardArray[index1 + ac][index2] = carrier;
      $("#" + (index1 + ac) + index2).addClass("carrier")
      $("#" + (index1 + ac) + index2).addClass("boatHere");
      // $(".custom-radio").addClass("hitButton")
    }
    // boatTouch(index1, index2)
  }
}//end of Carrier creation

// As a user I can torpedo two 4 block ships, so that the game is diverse.
// Battleship creation
function battleship() {
  for(var z = 0; z < 2; z++){
    var index1 = Math.floor(Math.random() *7);
    var index2 = Math.floor(Math.random() *7);
    var battleship = boardArray[index1][index2];
    var vOrH = Math.round((Math.random() * 1))
    while (noOverlap(vOrH, 3, index1, index2)){
        index1 = Math.floor(Math.random() *7);
        index2 = Math.floor(Math.random() *7);
        battleship = boardArray[index1][index2];
    } //end of while

    if (vOrH === 0){
      for (var ac = 0; ac < 4; ac++){
        if (z === 0) {
          battleship = 6;
        }
        else {
          battleship = 7;
        }
        boardArray[index1][index2 + ac] = battleship;
        $("#" + index1 + (index2 + ac)).addClass("battleship")
        $("#" + index1 + (index2 + ac)).addClass("boatHere");
        // $(".custom-radio").addClass("hitButton")
      }
    }
    else {
      for (var ac = 0; ac < 4; ac++){
        if (z === 0) {
          battleship = 6;
        }
        else {
          battleship = 7;
        }
        boardArray[index1 + ac][index2] = battleship;
        $("#" + (index1 + ac) + index2).addClass("battleship")
        $("#" + (index1 + ac) + index2).addClass("boatHere");
        // $(".custom-radio").addClass("hitButton")
      }
    }
  }
}//end of Battleship creation
// As a user I can torpedo two 3 block ships,, so that the game is diverse.
//  cruiser
function cruiser() {
  for(var z = 0; z < 1; z++){
    var index1 = Math.floor(Math.random() *8);
    var index2 = Math.floor(Math.random() *8);
    var cruiser = boardArray[index1][index2];
    var vOrH = Math.round((Math.random() * 1))
    while (noOverlap(vOrH, 2, index1, index2) || cruiser !== 0){
        index1 = Math.floor(Math.random() *8);
        index2 = Math.floor(Math.random() *8);
        cruiser = boardArray[index1][index2];
    } //end of while
    if (vOrH === 0){
      for (var ac = 0; ac < 3; ac++){
        let cruiser = 8;
        boardArray[index1][index2 + ac] = cruiser;
        $("#" + index1 + (index2 + ac)).addClass("cruiser")
        $("#" + index1 + index2).addClass("boatHere");
        // $(".custom-radio").addClass("hitButton")
      }
    }
    else {
      for (var ac = 0; ac < 3; ac++){
        let cruiser = 8;
        boardArray[index1 + ac][index2] = cruiser;
        $("#" + (index1 + ac) + index2).addClass("cruiser")
        $("#" + index1 + index2).addClass("boatHere");
        // $(".custom-radio").addClass("hitButton")
      }
    }
  }
}//end of cruiser creation
// submarine creating
function submarine() {
  for(var z = 0; z < 1; z++){
    var index1 = Math.floor(Math.random() *8);
    var index2 = Math.floor(Math.random() *8);
    var submarine = boardArray[index1][index2];
    var vOrH = Math.round((Math.random() * 1))
    while (noOverlap(vOrH, 2, index1, index2) || submarine !== 0){
        index1 = Math.floor(Math.random() *8);
        index2 = Math.floor(Math.random() *8);
        submarine = boardArray[index1][index2];
    } //end of while

    if (vOrH === 0){
      for (var ac = 0; ac < 3; ac++){
        submarine = 9;
        boardArray[index1][index2 + ac] = submarine;
        $("#" + index1 + (index2 + ac)).addClass("submarine")
        // $(".custom-radio").addClass("hitButton")
      }
    }
    else {
      for (var ac = 0; ac < 3; ac++){
        submarine = 9;
        boardArray[index1 + ac][index2] = submarine;
        $("#" + (index1 + ac) + index2).addClass("submarine")
        $("#" + index1 + index2).addClass("boatHere");
        // $(".custom-radio").addClass("hitButton")
      }
    }
  }
}//end of submarine creation
// destroyer creating
function detroyer() {
  for(var z = 0; z < 2; z++){
    var index1 = Math.floor(Math.random() *9);
    var index2 = Math.floor(Math.random() *9);
    var destroyer = boardArray[index1][index2];
    var vOrH = Math.round((Math.random() * 1))
    while (noOverlap(vOrH, 1, index1, index2) || destroyer !== 0){
        index1 = Math.floor(Math.random() *9);
        index2 = Math.floor(Math.random() *9);
        destroyer = boardArray[index1][index2];
    } //end of while
    if (vOrH === 0){
      for (var ac = 0; ac < 2; ac++){
        if (z === 0) {
          detroyer = 10;
        }
        else {
          destroyer = 11;
        }
        boardArray[index1][index2 + ac] = detroyer;
        $("#" + index1 + (index2 + ac)).addClass("detroyer")
        $("#" + index1 + index2).addClass("boatHere");
        // $(".custom-radio").addClass("hitButton")
      }
    }
    else {
      for (var ac = 0; ac < 2; ac++){
        if (z === 0) {
          detroyer = 10;
        }
        else {
          destroyer = 11;
        }
        boardArray[index1 + ac][index2] = detroyer;
        $("#" + (index1 + ac) + index2).addClass("detroyer")
        // $(".custom-radio").addClass("hitButton")
      }
    }
  }
}//end of detroyer creation

function mine() {
  for (var b = 0; b < 1; b++){
    var index1 = Math.floor(Math.random() *9);
    var index2 = Math.floor(Math.random() *9);
    var mine = boardArray[index1][index2];
    while (mine !== 0){

        index1 = Math.floor(Math.random() *9);
        index2 = Math.floor(Math.random() *9);
        mine = boardArray[index1][index2];
    } //end of while
    boardArray[index1][index2] = 12;
    $("#" + index1 + index2).addClass("mine");
    $("#" + index1 + index2).addClass("boatHere");
    // $(".custom-radio").addClass("hitButton")
  } // end for loop
} // end mine creation

//overlap function
function noOverlap (vOrH, length, index1, index2,) {
  var posTaken = false;
  if (boardArray[index1][index2] !== 0){
    posTaken = true
  }
  if (vOrH === 0){
    for (var ac = 0; ac < length; ac++){
      if ($("#" + index1 + (index2 + ac)).is("#boatHere")) {
        posTaken = true
      }
    }
  }
  else {
    for (var ac = 0; ac < length; ac++){
     // debugger
      if ($("#" + index1 + (index2 + ac)).is("#boatHere")) {
        posTaken = true
      }
    }
  }
  return posTaken
} //end overlap function



//start of checking for touching boats
// function boatTouch(i1, i2) {
//
//   if (i1 === 0 && i2 === 0){
//     boardArray[i1][i2 + 1] = 3;
//     boardArray [i1 + 1][i2 +1] = 3;
//     boardArray[i1 + 1][i2] = 3;
//   }
//   else if (i2 === 0){
//     boardArray[i1 - 1][i2] = 3;
//     boardArray[i1 - 1][i2 + 1] = 3;
//     boardArray[i1][i2 + 1] = 3;
//     boardArray [i1 + 1][i2 +1] = 3;
//     boardArray[i1 + 1][i2] = 3;
//   }
//   else if (i1 === 9 && i2 === 0) {
//     boardArray[i1 - 1][i2] = 3;
//     boardArray[i1 - 1][i2 + 1] = 3;
//     boardArray[i1][i2 + 1] = 3;
//   }
//   else if (i1 === 9) {
//     boardArray [i1 - 1][i2 - 1] = 3;
//     boardArray[i1 - 1][i2] = 3;
//     boardArray[i1 - 1][i2 + 1] = 3;
//     boardArray[i1][i2 + 1] = 3;
//     boardArray[i1][i2 - 1] = 3;
//   }
//   else if (i1 === 9 && i2 === 8) {
//     boardArray [i1 - 1][i2 - 1] = 3;
//     boardArray[i1 - 1][i2] = 3;
//     boardArray[i1][i2 - 1] = 3;
//   }
//   else if (i2 === 9) {
//     boardArray [i1 - 1][i2 - 1] = 3;
//     boardArray[i1 - 1][i2] = 3;
//     boardArray[i1 + 1][i2] = 3;
//     boardArray[i1 + 1][i2 - 1] = 3;
//     boardArray[i1][i2 - 1] = 3;
//   }
//   else if (i1 === 0 && i2 === 9) {
//     boardArray[i1 + 1][i2] = 3;
//     boardArray[i1 + 1][i2 - 1] = 3;
//     boardArray[i1][i2 - 1] = 3;
//   }
//   else if (i1 === 0){
//     boardArray[i1][i2 + 1] = 3;
//     boardArray [i1 + 1][i2 + 1] = 3;
//     boardArray[i1 + 1][i2] = 3;
//     boardArray[i1 + 1][i2 - 1] = 3;
//     boardArray[i1][i2 - 1] = 3;
//   }
//   else {
//     boardArray [i1 - 1][i2 - 1] = 3;
//     boardArray [i1 - 1][i2] = 3;
//     boardArray [i1 - 1][i2 + 1] = 3;
//     boardArray [i1][i2 + 1] = 3;
//     boardArray [i1 + 1][i2 + 1] = 3;
//     boardArray [i1 + 1][i2] = 3;
//     boardArray [i1 + 1][i2 - 1] = 3;
//     boardArray [i1][i2 - 1] = 3;
//   }
// }// end of function for checking if boats touch

//function for click and hit increase
function clickInc() {
  clickCount++; // As a user I can see how many torpedoes I have used, so that I can keep track
  // As a user when I click on a position I can see if there was a ship at that location so that I can see if I hit a ship. If there is a ship it counts as a hit.
  alert("It's a HIT !!!!");
  hits++;
  missiles--;
} //end of function for click increase
