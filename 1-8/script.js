var m = prompt("შეიყვანეთ m საიდან დაიწყოს ნატურალურმა რიცხვმა ათვლა:");
var n = prompt("შეიყვანეთ n სადამდე განაგრძოს ათვლა:");

function fun1(m, n) {
    for (var i = m; i <= n; i++) {
        console.log(i);
    }
}

fun1(m, n);