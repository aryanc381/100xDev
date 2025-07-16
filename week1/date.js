// const currentDate = new Date()
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// let start = currentDate.setFullYear(2022);
// console.log(start)

/*
function calcSum() {
    let a = 0;
    for (let i = 0; i < 10000000; i++) {
        a += i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
console.log(beforeDate.getTime());

calcSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();
console.log(afterDate.getTime());

console.log(afterTimeInMs - beforeTimeInMs)

*/

// JSON - Javascript Object Notation

const users = '{"name": "aryan", "age": 21, "height": 6.3}'
const users_parse = JSON.parse(users)

console.log(users_parse)
console.log(users_parse["name"])

const user2 = {
    name   : "ARYAN",
    gender : "MALE",
}
console.log(user2)

const user2string = JSON.stringify(user2)
console.log(user2string)

console.log(Math.random())
