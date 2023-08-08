function cover() {
    let Amount = document.getElementById("Amount").value;
    let Fromc = document.getElementById("from").value;
    let To = document.getElementById("to").value;
    let Result;

    if (Fromc == "USD" && To == "VND") {
        Result = "Result " + (Amount*23000) + "Đ"
    }
    else if (Fromc == "VND" && To == "VND") {
        Result = "Result " + (Amount) + "Đ"
    }
    else if (Fromc == "USD") {
        Result = "Result " + (Amount) + "$"
    }
    else{
        Result = "Result " + (Amount/23000) + "$"
    }
document.getElementById("Result").innerHTML = Result ;
}