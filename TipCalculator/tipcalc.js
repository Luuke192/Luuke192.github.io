var max_chars = 6;
$('#bill').keydown( function(e){
    if ($(this).val().length >= max_chars) { 
        $(this).val($(this).val().substr(0, max_chars));
    }
});

$('#bill').keyup( function(e){
    if ($(this).val().length >= max_chars) { 
        $(this).val($(this).val().substr(0, max_chars));
    }
});

function tipCalculate(bill, percentage) {
  var bill = Number(document.getElementById('bill').value);
  var splitNum = document.getElementById('splitNum').value;
  if (splitNum == 1) {
    $("#peopleTerm").text("Person");
  } else {
    $("#peopleTerm").text("People");
  }
  var tipPrct = $('#selector').val();
  var totalAmt = ((tipPrct * bill) / splitNum).toFixed(2);

  $("#totalAmt").html(
    "<h6>TOTAL AMOUNT</h6>" +
    "<h2>$" + totalAmt + "</h2>"
    + "Each");

}
function ClearFields(noText) {
  document.getElementById("bill").value = "";
  document.getElementById("splitNum").value = "";
}