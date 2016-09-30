$(function () {
    $('#checkNumbers').click(function () {
        checkGuess();
    })
    $('#gameInstructions').click(function () {
        alert("Pick numbers between 0-9, Green means you chose the correct number, Yellow means the number is in one of the boxes, Red means the number is nowhere to be found.");
    })
    $('#resetGame').click(function () {
        location.reload();
    })
})
var boxHidden1 = Math.round(Math.random() * 9) + 0;
var boxHidden2 = Math.round(Math.random() * 9) + 0;
var boxHidden3 = Math.round(Math.random() * 9) + 0;

if (boxHidden1 == boxHidden2 || boxHidden1 == boxHidden3) {
    boxHidden1 = Math.round(Math.random() * 9) + 0;
} else if (boxHidden2 == boxHidden1 || boxHidden2 == boxHidden3) {
    boxHidden2 = Math.round(Math.random() * 9) + 0;
} else if (boxHidden3 == boxHidden2 || boxHidden3 == boxHidden1) {
    boxHidden3 = Math.round(Math.random() * 9) + 0;
}
console.log(boxHidden1, boxHidden3, boxHidden2);
var turns = 10;

function checkGuess() {
    var box1 = $('#box1').val();
    var box2 = $('#box2').val();
    var box3 = $('#box3').val();

    while (turns > 0) {

        //Box 1

        if (box1 == boxHidden1 && box1 != "") {
            $('#box1').css('background-color', 'lightgreen')
        } else if (box1 == "") {
            $('#box1').css('background-color', 'lightcoral')
        } else if (box1 == boxHidden2 || box1 == boxHidden3) {
            $('#box1').css('background-color', '#ffff66')
        } else {
            $('#box1').css('background-color', 'lightcoral')
        }

        //Box 2

        if (box2 == boxHidden2 && box2 != "") {
            $('#box2').css('background-color', 'lightgreen')
        } else if (box2 == "") {
            $('#box2').css('background-color', 'lightcoral')
        } else if (box2 == boxHidden1 || box2 == boxHidden3) {
            $('#box2').css('background-color', '#ffff66')
        } else {
            $('#box2').css('background-color', 'lightcoral')
        }

        //Box 3

        if (box3 == boxHidden3 && box3 != "") {
            $('#box3').css('background-color', 'lightgreen')
        } else if (box3 == "") {
            $('#box3').css('background-color', 'lightcoral')
        } else if (box3 == boxHidden2 || box3 == boxHidden1) {
            $('#box3').css('background-color', '#ffff66')
        } else {
            $('#box3').css('background-color', 'lightcoral')
        }

        //Try counter

        turns--
        $('#amountOfTries').html('<h2>You have ' + turns + ' tries left!</h2>');

        //Win validation

        if (box1 == boxHidden1 && box2 == boxHidden2 && box3 == boxHidden3 && turns > 0) {
            $('#amountOfTries').html('<h3>Good job! You still had ' + turns + ' tries left!</h3>');
            window.alert("Congratulations! You guessed all of the numbers correctly!")
        } else if (turns <= 0) {
            $('#amountOfTries').html('<h3>Better luck next time!</h3>');
            window.alert("Sorry, you've run out of tries. The numbers were " + boxHidden1 + ", " + boxHidden3 + ", " + boxHidden2 + "...")
        }
        return;
    }
}