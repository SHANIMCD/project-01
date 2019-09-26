var board1, board2, board1s, board2s;

board1 = board2 = board1s = board2s = new Array(10);
function fillBoard(board){
  for(var i = 0; i < 10; i++){
    board[i] = new Array(10);

    for(var j = 0; j < 10; j++){
      board[i][j] = false;
    }
  }
}

var boards = [board1, board2, board1s, board2s];

for(var i = 0; i < 4; i++){
  fillBoard(boards[i]);
}

var players = {
  "human":{
    "ships":{
      "carrier":{
        "length": 5,
        "isPlaced": false,
        "name":"carrier"
      },
      "battleship":{
        "length": 4,
        "isPlaced": false,
        "name":"battleship"
      },
      "submarine":{
        "length": 3,
        "isPlaced": false,
        "name":"submarine"
      },
      "cruiser":{
        "length": 3,
        "isPlaced": false,
        "name":"cruiser"
      },
      "destroyer":{
        "length": 2,
        "isPlaced": false,
        "name":"destroyer"
      }
    }
  },
  "cpu":{
    "ships":{
      "carrier":{
        "length": 5,
        "isPlaced": false,
        "name":"carrier"
      },
      "battleship":{
        "length": 4,
        "isPlaced": false,
        "name":"battleship"
      },
      "submarine":{
        "length": 3,
        "isPlaced": false,
        "name":"submarine"
      },
      "cruiser":{
        "length": 3,
        "isPlaced": false,
        "name":"cruiser"
      },
      "destroyer":{
        "length": 2,
        "isPlaced": false,
        "name":"destroyer"
      }
    }
  }
}

function placeShip(ship, player){
  //false means horizontal, true means vertical
  var rotation;
  var location;
  var board;

  function detectClick(x, y){
    rotation = window.confirm("Ship: " + ship.name + ". Vertical (OK) or Horizontal (Cancel)?");
    board = board1;

    console.log(x + " AND " + y);

    var isTaken = false;
    // check if the spot is already there
    for(var i = y; i < (ship.length + y); i++){
      if(board[i][x] === true){
        isTaken = true;
      }
    }

    if(isTaken === true){
      window.alert("This spot is already taken. Please Try Again");
      placeShip(ship, player);
    }else if(isTaken === false){
      if(rotation === true){
        for(var i = y; i < (ship.length + y); i++){
          board[i][x] = true;
        }
      }else if(rotation === false){
        for(var i = x; i < (ship.length + x); i++){
          board[y][i] = true;
        }
      }
    }

    ship.isPlaced = true;
  }

  if(player === 'h'){
    // LOGIC TO MAKE HTML GRID clickable
    var css = '#board1 td:hover{ background-color: grey }';
    var style = document.createElement('style');
    style.innerHTML = css;
    document.getElementById('body').appendChild(style);

    for(var i = 0; i < htmlX.length; i++){
      for(var j = 0; j < 10; j++){
        htmlX[i].children[j].onclick = function(){
          detectClick(i, j);
        }
      }
    }

    // LOGIC TO FIND CLICK
  }else if(player === 'c'){


    // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
    // cpu logic
    // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO


    board = board2;
  }
