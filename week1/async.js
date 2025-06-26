// Synchronus - One sequence is happening at a time. One sequence after another.
// Asynchronus - Doing multiple things at a time. Multitask at a single task.

// Types of async function: 

/*
function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    console.log(findSum(100));
}
setTimeout(findSumTill100, 10000); // async function 
console.log("Hello World");

*/

/*
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data)
})

console.log("hi there!")
*/

const fs = require('fs');
function aryanRead(fn) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        fn(data);
    })
}

function onDone(data) {
    console.log("data");
}

function beforeDone(data) {
    console.log(data);
}
aryanRead(onDone);
aryanRead(beforeDone);

// Promises - Just a wrapper built on top of some js async code
function AryanReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
        });
    })
}
function onCompletion(data) {
    console.log(data);
}
AryanReadFile().then(onCompletion);

// pending, resolve, rejected
var c = new Promise(function(resolve){
    resolve("hi there");
});

function call(c) {
    console.log(c);
}
console.log(c);
c.then(call);

// ASYNC - To remove the promise bs lengthy ass syntax, does the same thing and is used at the caller's side not defining side.
// AWAIT - To make that single thread wait there in the function till promise is not resolved.

function hi() {
    let p = new Promise(function (resolve){
        resolve("\n\nhi there!")
    });
    return p;
}

async function main() {
    const value = await hi();
    console.log(value)
}
main();