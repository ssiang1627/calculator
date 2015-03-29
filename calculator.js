$(document).ready(function(){
	var testNumLength = function(currentNumber) {
        if (currentNumber.length > 9) {
            screendiv.text(currentNumber.substr(currentNumber.length-9,9));
            if (currentNumber.length > 15) {
                currentNumber = "";
                screendiv.text("Err");
            }
        } 
    };
	var currentNumber = "";
    var storageNumber = "";
    var operator = "";
    var screendiv = $("#screen");
    screendiv.text("0");
    $("#numbers button").not("#clear,#clearall").click(function(){
		currentNumber += $(this).text();
		screendiv.text(currentNumber);
		testNumLength(currentNumber);
    });
    $("#operators button").not("#equals").click(function(){
		operator = $(this).text();
		storageNumber = currentNumber;
		currentNumber = "";
		screendiv.text("0");
    });
    $("#clear,#clearall").click(function(){
		currentNumber = "";
		screendiv.text("0");
		if ($(this).attr("id") === "clearall") {
			storageNumber = "";
		}
    });
    $("#equals").click(function(){
		if (operator === "+"){
			currentNumber = (parseInt(currentNumber, 10) + parseInt(storageNumber,10)).toString(10);
		} else if (operator === "-"){
			currentNumber = (parseInt(storageNumber, 10) - parseInt(currentNumber,10)).toString(10);
		} else if (operator === "/"){
			currentNumber = (parseInt(storageNumber, 10) / parseInt(currentNumber,10)).toString(10);
		} else if (operator === "*"){
			currentNumber = (parseInt(storageNumber, 10) * parseInt(currentNumber,10)).toString(10);
		}
		screendiv.text(currentNumber);
		testNumLength(currentNumber);
		storageNumber = "";
		operator="";
    });
});