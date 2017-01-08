$(function () {
    $('#calculate').click(function () {
        calculateTip();
    })
    $('#clearFields').click(function () {
        location.reload();
    })
})

function calculateTip() {
    var billAmount = $('#billAmount').val();
    var serviceQuality = $('#serviceQuality').val();
    var numPeople = $('#billPeople').val();

    if (billAmount.length > 6) {
        window.alert("Cannot calculate values with more than 6 characters!")
        return;
    }
    if (billAmount === "" || serviceQuality == null) {
        window.alert("Please select/enter values in the required fields! (Check for any misplaced decimals as well!)")
        return;
    }
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        $('#each').hide();
    } else {
        $('#each').show();
    }
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    $('#totalTipText').show();
    $('#totalTip').show();
    $('#totalTip').html('<h3>$' + total + '</h3>');
    
}
$('#each').hide();
$('#totalTipText').hide();
$('#totalTip').hide();