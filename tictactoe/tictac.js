//Global Variables
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var context;
var squaresFilled = 0;
var w;
var y;

//Instanciate Arrays
window.onload = function () {

	painted = new Array();
	content = new Array();
	winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

	for (var i = 0; i <= 8; i++) {
		painted[i] = false;
		content[i] = '';
	}
	$("#reset").on("click", function() {
		location.reload(true);
	});
};

//Game methods
function canvasClicked(canvasNumber) {
	theCanvas = "canvas" + canvasNumber;
	c = document.getElementById(theCanvas);
	context = c.getContext("2d");


	if (painted[canvasNumber - 1] == false) {
		if (turn % 2 == 0) {
			context.beginPath();
			context.moveTo(30, 30);
			context.lineTo(80, 80);
			context.moveTo(80, 30);
			context.lineTo(30, 80);
			context.stroke();
			context.closePath();
			content[canvasNumber - 1] = 'X';
		}

		else {
			context.beginPath();
			context.arc(55, 55, 35, 0, Math.PI * 2, true);
			context.stroke();
			context.closePath();
			content[canvasNumber - 1] = 'O';
		}

		turn++;
		painted[canvasNumber - 1] = true;
		squaresFilled++;
		checkForWinners(content[canvasNumber - 1]);

		if (squaresFilled == 9) {
			alert("All squares are filled! Press OK to continue.");
			location.reload(true);
		}

	}
	else {
		alert("You already clicked this one!");
	}
}

function checkForWinners(symbol) {

	for (var a = 0; a < winningCombinations.length; a++) {
		if (content[winningCombinations[a][0]] == symbol && content[winningCombinations[a][1]] == symbol && content[winningCombinations[a][2]] == symbol) {
			// alert(symbol + " is the WINNER!");
			if (symbol == "X") {
				$("#whoWins").html("'X' is the winner!");
			} else {
				$("#whoWins").html("'O' is the winner!");
			}
			document.getElementById('board').style.pointerEvents = 'none';
		}
	}

}
