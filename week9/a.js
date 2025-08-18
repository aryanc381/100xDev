// greet
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Aryan");
// sum
function sum(num1, num2) {
    var c = num1 + num2;
    console.log(num1 + num2);
    return c;
}
sum(1, 69);
// legal
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
isLegal(21);
// callback
function f1(fn) {
    console.log("The first function ran.");
    setTimeout(fn, 5000);
}
function f2() {
    console.log("The second function ran");
}
f1(f2);
function tallChecker(user) {
    if (user.height > 6) {
        return true;
    }
    else {
        return false;
    }
}
var user1 = {
    firstName: "Aryan",
    lastName: "Chauhan",
    age: 21,
    height: 6.3
};
console.log(tallChecker(user1));
