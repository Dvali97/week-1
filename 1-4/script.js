function fun1() {
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);

    var table = document.getElementById("tab");

    table.style.width = width + "px";
    table.style.height = height + "px";
}