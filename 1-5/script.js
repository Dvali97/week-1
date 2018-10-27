function fun1() {
    var table = document.getElementById("tab");

    var width1 = parseInt(document.getElementById("width").value);
    var height1 = parseInt(document.getElementById("height").value);
    var color1 = document.getElementById("color").value;
    var sizing = parseInt(document.getElementById("sizing").value);


    table.style.width = width1 + "px"; 
    table.style.height = height1 + "px";
    table.style.backgroundColor = color1;
    table.style.padding = sizing + "px";
}