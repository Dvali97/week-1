function fun1() {
    var text = document.getElementById('text');
    var number = parseInt(document.getElementById("size").value) + "px";
    var result = document.getElementById("result");

    return text.style.fontSize = number;
}