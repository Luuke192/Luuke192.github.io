$(function () {
  // $("#reset").hide();
  var firstNumber = Math.floor(Math.random() * 9) + 1;
  var secondNumber = Math.floor(Math.random() * 9) + 1;
  var thirdNumber = Math.floor(Math.random() * 9) + 1;

  while (firstNumber == secondNumber || firstNumber == thirdNumber || secondNumber == thirdNumber) {
    firstNumber = Math.floor(Math.random() * 9) + 1;
    secondNumber = Math.floor(Math.random() * 9) + 1;
    thirdNumber = Math.floor(Math.random() * 9) + 1;
  }

  console.log(firstNumber);
  console.log(secondNumber);
  console.log(thirdNumber);

  $("#submit").on("click", function () {
    if ($("#firstInput").val() == firstNumber) {
      $("#col1").css("background-color", "green")
    }
    else if ($("#firstInput").val() == secondNumber || $("#firstInput").val() == thirdNumber) {
      $("#col1").css("background-color", "yellow")
    } else {
      $("#col1").css("background-color", "red")
    }
  });

  $("#submit").on("click", function () {
    if ($("#secondInput").val() == secondNumber) {
      $("#col2").css("background-color", "green")
    }
    else if ($("#secondInput").val() == firstNumber || $("#secondInput").val() == thirdNumber) {
      $("#col2").css("background-color", "yellow")
    } else {
      $("#col2").css("background-color", "red")
    }
  });

  $("#submit").on("click", function () {
    if ($("#thirdInput").val() == thirdNumber) {
      $("#col3").css("background-color", "green")
    }
    else if ($("#thirdInput").val() == firstNumber || $("#thirdInput").val() == secondNumber) {
      $("#col3").css("background-color", "yellow")
    } else {
      $("#col3").css("background-color", "red")
    }

    if ($("#firstInput").val() == firstNumber && $("#secondInput").val() == secondNumber) {
      $("#col3").css("background-color", "red");
    } else if ($("#firstInput").val() == firstNumber && $("#thirdInput").val() == thirdNumber) {
      $("#col2").css("background-color", "red");
    } else if ($("#secondInput").val() == secondNumber && $("#thirdInput").val() == thirdNumber) {
      $("#col1").css("background-color", "red");
    }

    if (($("#firstInput").val() == firstNumber) && ($("#secondInput").val() == secondNumber) && ($("#thirdInput").val() == thirdNumber)) {
      $("#col1").css("background-color", "green");
      $("#col2").css("background-color", "green");
      $("#col3").css("background-color", "green");
      alert("Who gave you the answers?? That was amazing!");
      $("#submit").remove();
      $("#reset").fadeIn();
    }
  });
  var guesses = 10;
  $("#submit").on("click", function () {
    guesses = guesses - 1;
    $("#guessesLeft").html("You have " + guesses + " guesses left!");
    if (guesses == 0) {
      alert("Whoops! Looks like you lost!");
      $("#submit").remove();
      $("#reset").fadeIn();
    }
  });

  $("#reset").on("click", function () {
    location.reload();
  });
});
// Makes the input field only allow numbers
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  } else {
    return true;
  }
}