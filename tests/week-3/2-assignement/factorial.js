//
function factorial(n) {
    var fact;
    if (n > 0) {
        var i = 1;
        fact = 1;
        while (n >= i) {
            fact = fact * i;
            i++;
        }
    }
    else if (n < 0) {
        console.log("Negative number");
    }
    else if (n == 0) {
        fact = 1;
    }
    return fact;
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-5)); // Negative number
