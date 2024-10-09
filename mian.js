function covert() {
    let Amount = parseFloat(document.querySelector(".getMoney").value);
    let From = document.querySelector(".name").value;
    let To = document.querySelector(".nameTo").value;
    let Result = "";

    if (isNaN(Amount)) {
        Result = "Please enter a valid number.";
    } else if (From === "VND" && To === "USD") {
        Result = "Result = " + (Amount / 24000) + " $";
    } else if (From === "USD" && To === "VND") {
        Result = "Result = " + (Amount * 24000) + " VNĐ";
    } else if (From === "VND" && To === " VND") {
        Result = "Result = " + Amount + " VNĐ";
    } else if (From === "USD" && To === "USD") {
        Result = "Result = " + Amount + " $";
    } else {
        Result = "Invalid currency selection.";
    }

    document.querySelector(".result").innerHTML = Result;

}