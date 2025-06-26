// Promises - syntactical sugar | more readable | more cleaner async functions.

/* raw async function
setTimeout(function() {
    console.log("Hi there");

    setTimeout(function() {
        console.log("Inside second")
    }, 2000);
}, 1000);
*/

// Wrapper of async function
/*
function myOwnSetTimeout(callback, duration) {
    setTimeout(callback, duration);
}

myOwnSetTimeout(function() {
    console.log("Hey there");
}, 1000);
*/

// Promises -> return promise to assure callback has been made.  
function promisifiedMyOwnSetTimeout(duration) {
    const p = new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Hi there this is happening inside the promise.");
        }, duration);
    });
    return p;
}

const ans = promisifiedMyOwnSetTimeout(1000);

ans.then(function() {
    console.log("timeout is done!");
});
