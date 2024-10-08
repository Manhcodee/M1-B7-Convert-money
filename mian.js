function covert() {
    let Amount = parseFloat(document.querySelector(".getMoney").value);
    let From = document.querySelector(".name").value;
    let To = document.querySelector(".nameTo").value;
    let Result = ""; // Initialize Result

    if (isNaN(Amount)) {
        Result = "Please enter a valid number.";
    } else if (From === "VND" && To === "USD") {
        //alert('ooo');
        Result = "Result = " + (Amount / 24000) + "$"; // Convert VND to USD
        //alert(Result);

    } else if (From === "USD" && To === "VND") {
        Result = "Result = " + (Amount * 24000) + "Đ"; // Convert USD to VND
    } else if (From === "VND" && To === "VND") {
        Result = "Result = " + Amount + "Đ"; // Just display VND
    } else if (From === "USD" && To === "USD") {
        Result = "Result = " + Amount + " $"; // Just display USD
    } else {
        Result = "Invalid currency selection.";
    }

    document.querySelector(".result").innerHTML = Result; // Output the result

   // document.getElementById("result").innerHTML = 'aaa';
}