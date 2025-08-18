// greet
function greet(firstName: string) {
    console.log("Hello " + firstName);
}
greet("Aryan");

// sum
function sum(num1: number, num2: number): number {
    const c: number = num1 + num2;
    console.log(num1 + num2);
    return c;
}
sum(1, 69);

// legal
function isLegal(age: number): boolean {
    if(age >= 18) {
        return true;
    } 
    return false;
}
isLegal(21);

// callback
function f1(fn: () => void) {
    console.log("The first function ran.")
    setTimeout(fn, 5000);
}
function f2() {
    console.log("The second function ran");
}
f1(f2);

// Interfaces

interface User {
    firstName: string;
    lastName: string;
    age: number;
    height: number;
    email?: string; // optional for user to input
}

function tallChecker(user: User) {
    if(user.height > 6) {
        return true;
    } else {
        return false;
    }
}

const user1 = {
    firstName: "Aryan",
    lastName: "Chauhan",
    age: 21,
    height: 6.3
}

console.log(tallChecker(user1));