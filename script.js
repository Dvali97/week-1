function fun() {
    var daxra = document.getElementsByClassName("daxra").checked;
    var gamuqeba = document.getElementsByClassName("gamuqeba").checked;
    var xazisGasma = document.getElementsByClassName("xazisGasma").checked;

    var text = document.getElementsByClassName("text").value;
    var shedegi = document.getElementsByClassName("shedegi");

    if (daxra) {
        text = "<i>" + text + "</i>";
    }

    if (gamuqeba) {
        text = "b" + text + "</b>";
    }

    if (xazisGasma) {
        text = "<u>" + text + "</u>";
    }

    shedegi.innerHTML = text;

}