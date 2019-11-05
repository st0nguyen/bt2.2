function doCalculate() {
    var x = document.getElementById("ko").value;
    parseFloat(x);
    if (loai1.value == "USD" && loai2.value == "VND") {
        alert(x * 23000 + " vnd");
    }
    if (loai1.value === "VND" && loai2.value === "USD")
        alert(x/23000 + " usd");

    if (loai1.value === "USD" && loai2.value === "USD") {
        alert(x);
    }
}