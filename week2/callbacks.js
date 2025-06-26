function cube(a) {
    return a * a * a;
}


function square(a) {
    return a * a;
}


function something(a, b, fn) {
    let num1 = fn(a); // callback 1
    let num2 = fn(b); // callback 2
    return num1 + num2
}

let ans = something(5, 1, square);
console.log(ans);