function fun1() {
    i = document.getElementById('i').checked;
    b = document.getElementById('b').checked;
    u = document.getElementById('u').checked;

    result = document.getElementById('result');
    var text = document.getElementById('text').value;

    if (i) {
        text = "<i>" + text + "</i>";
    }

    if (b) {
        text = "<b>" + text + "</b>";
    }

    if (u) {
        text = "<u>" + text + "</u>";
    }

    result.innerHTML = text;
}