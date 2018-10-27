function fun1() {
    var first = parseInt(document.getElementById("number-1").value);
    var second = parseInt(document.getElementById("number-2").value);
    var result = document.getElementById("result");

    result.value = first + second;
}
