
//Global Variables
var gridArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var gameState = 0;
var gameAttempts = 0;

var xImg = "http://texas.thefootballbrainiacs.com/wp-content/uploads/2016/01/X.jpg";
var oImg = "o29.jpg";
var blankImg = "https://s0.wp.com/i/blank.jpg";

//Compares Two Arrays
function compare(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }
    if (a.length != b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

//Check win and shows modal
function gameOver() {
    //Check if game tied
    var flatArray = gridArray[0].concat(gridArray[1], gridArray[2]);
    console.log(flatArray);
    if (flatArray.indexOf(0) == -1) {
        gameState = 1;
        $('#drawModal').modal('show');
    }
    //Check for a Win
    //Diagonal counters
    var diag1X = 0;
    var diag1O = 0;
    var diag2X = 0;
    var diag2O = 0;
    //Check Row and Columns
    for (var i = 0; i < 3; i++) {
        //Initialize Counter
        var rowX = 0;
        var rowO = 0;
        var colX = 0;
        var colO = 0;
        //Check Diagonals
        if (gridArray[i][i] == "X") {
            diag1X++;
        } else if (gridArray[i][i] == "O") {
            diag1O++;
        } if (gridArray[i][(2 - i)] == "X") {
            diag2X++;
        } else if (gridArray[i][(2 - i)] == "O") {
            diag2O++;
        } if (i == 2) {
            if (diag1X == 3 || diag2X == 3) {
                gameState = 1;
                $('#winModal').modal('show');
            }
            else if (diag1O == 3 || diag2O == 3) {
                gameState = 1;
                $('#loseModal').modal('show');
            }
        }
        //Check Rows & Columns for win
        for (var j = 0; j < 3; j++) {
            if (gridArray[i][j] == "X") {
                rowX++;
            } else if (gridArray[i][j] == "O") {
                rowO++;
            } if (gridArray[j][i] == "X") {
                colX++;
            } else if (gridArray[j][i] == "O") {
                colO++;
            } if (j == 2) {
                if (rowX == 3 || colX == 3) {
                    gameState = 1;
                    $('#winModal').modal('show');
                } else if (rowO == 3 || colO == 3) {
                    gameState = 1;
                    $('#loseModal').modal('show');
                }
            }
        }
    }
}

//Returns the gridArray X index for given div
function xIndex(squareDiv) {
    var x = squareDiv.split("_");
    var i = parseInt(x[1]);
    return i;
}

//Returns the gridArray Y index for given div
function yIndex(squareDiv) {
    var x = squareDiv.split("_");
    var i = parseInt(x[2]);
    return i;
}

//Creates 3x3 div Grid then gives names and applies classes
function createGame() {
    for (var i = 0; i < 3; i++) {
        var rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (var j = 0; j < 3; j++) {
            var gridDiv = document.createElement("div");
            gridDiv.id = "square_" + i + "_" + j;
            gridDiv.classList.add("col-lg-4");
            gridDiv.classList.add("col-sm-4");
            gridDiv.classList.add("col-4");
            gridDiv.classList.add("blank");
            $('<img/>').attr('src', blankImg).addClass('img-responsive').appendTo(gridDiv);
            rowDiv.appendChild(gridDiv);
        }

        document.getElementById("playarea").appendChild(rowDiv);
        if (i < 2) {
            $("<br>").appendTo(document.getElementById("playarea"));
        }
    }
}

//Resets gridArray and gameState, clears playarea, and calls createGame
function resetGame() {
    gridArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    gameState = 0;
    document.getElementById("playarea").innerHTML = '';
    createGame();
}

// Increments game attempt counter, resets if given "reset" as argument
function incrementCounter(condition) {
    if (condition == "reset") {
        gameAttempts = 1;
    } else {
        gameAttempts++;
    }
    var counters = document.getElementsByClassName("counter")
    for (var i = 0; i < counters.length; i++) {
        var count = counters[i];
        count.innerHTML = gameAttempts;
    }
}


//Use jQuery to create game on page load and capture clicks to change the pictures
currentPlayer = "O";

$(document).ready(function () {
    createGame();
    incrementCounter();

    $(document).on("mousedown", ".blank", function () {
        if ($(this).hasClass("blank")) {
            if (gameState == 0 && currentPlayer == "O") {
                this.classList.remove("blank");
                this.classList.add("O");
                $(this).children("img").attr('src', oImg);
                gridArray[xIndex(this.id)][yIndex(this.id)] = "O";
                currentPlayer = "X"
                gameOver();
                if (gameState == 0) {
                    gameOver();
                }
            } else if (gameState == 0 && currentPlayer == "X") { 
                this.classList.remove("blank");
                this.classList.add("X");
                $(this).children("img").attr('src', xImg);
                gridArray[xIndex(this.id)][yIndex(this.id)] = "X";
                currentPlayer = "O"
                gameOver();
                if (gameState == 0) {
                    gameOver();
                }
            } else {
                return;
            }
        }
    })
    $("#drawModal").on('hide.bs.modal', function () {
        incrementCounter();
    });
    $("#winModal").on('hide.bs.modal', function () {
        incrementCounter();
    });
    $("#loseModal").on('hide.bs.modal', function () {
        incrementCounter();
    });

    $(".btn-reset").click(function () {
        resetGame();
    })

    $(".btn-reset-user").click(function () {
        resetGame(incrementCounter());
    })
});
