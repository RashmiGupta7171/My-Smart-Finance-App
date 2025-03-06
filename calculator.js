// calculation for VAT Amount:
function calculateVat() {
    var markedPrice = document.getElementById('markedAmount').value;
    var vatRate = document.getElementById('vatRate').value;
    if (!Number.isInteger(Number(markedPrice))) {
        document.getElementById('vatOutput').innerHTML = "Please Enter a Valid Number"
        return;
    }
    if (markedPrice == 0) {
        document.getElementById('vatOutput').innerHTML = "No VAT Amount";
        return;
    }
    var vat = (vatRate / 100) * markedPrice;
    var sellingPrice = parseInt(markedPrice) + vat;

    document.getElementById('vatOutput').innerHTML = "Total VAT Amount:" + vat;
    document.getElementById('vatOutput').innerHTML += "<br>Total Selling Price Including VAT:" + sellingPrice;
}
// Calculation for Discount AMount:
function calculateDiscount() {
    var markedPrice = document.getElementById('marketPrice').value;
    var discountRate = document.getElementById('discountRate').value;
    if (!Number.isInteger(Number(markedPrice))) {
        document.getElementById('discountOutput').innerHTML = "Please Enter a Valid Number"
        return;
    }
    if (markedPrice == 0) {
        document.getElementById('discountOutput').innerHTML = "No Discount Amount";
        return;
    }
    var discountAmount = (discountRate / 100) * markedPrice;
    var totalAmount = markedPrice - discountAmount;


    document.getElementById('discountOutput').innerHTML = "Total Discount Amount:" + discountAmount;
    document.getElementById('discountOutput').innerHTML += "<br>Total Amount After Discount:" + totalAmount;
}

// Calculation For Profit and Loss Amount:
function calculateProfitLoss() {
    var sellingPrice = document.getElementById('sellingAmount').value;
    var costPrice = document.getElementById('costAmount').value;
    var outputId = 'profitLossOutput';

    if (!Number.isInteger(Number(sellingPrice))) {
        document.getElementById(outputId).innerHTML = "Please Enter a Valid Number"
        return;
    }
    if (!Number.isInteger(Number(costPrice))) {
        document.getElementById(outputId).innerHTML = "Please Enter a Valid Number"
        return;
    }

    if (sellingPrice <= 0 || costPrice <= 0) {
        document.getElementById(outputId).innerHTML = "Please Enter Amount Greater Than Zero";
        return;
    }

    if (sellingPrice > costPrice) {
        var profit = sellingPrice - costPrice;
        document.getElementById(outputId).innerHTML = "Profit Amount: " + profit;
    }

    else if (sellingPrice < costPrice) {
        var loss = costPrice - sellingPrice;

        document.getElementById(outputId).innerHTML = "Loss Amount: " + loss;

    }
    else {
        document.getElementById(outputId).innerHTML = "Neither Profit , Nor Loss";
    }
}




