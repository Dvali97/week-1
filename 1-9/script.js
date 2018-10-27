function func10() {
    width = document.getElementById("width1").value;
    height = document.getElementById("height1").value;
    bg_color = document.getElementById("bg_color").value;
    br_sz = document.getElementById("br_sz").value;
    br_color = document.getElementById("br_color").value;
    br_st = document.getElementById("br_st").value;

    w = width + "px";
    h = height + "px";
    br_sz = br_sz + "px";
    br = br_sz + " " + br_st + " " + br_color;

    document.getElementById("table_1").style.width = w;
    document.getElementById("table_1").style.height = h;
    document.getElementById("table_1").style.backgroundColor = bg_color;
    document.getElementById("table_1").style.border = br;
}