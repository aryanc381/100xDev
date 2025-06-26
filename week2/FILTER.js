// FILTER -> To filter an array


// ans
/* HARDCODED
const arr = [1, 2, 3, 4, 5]
const newArr = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        newArr.push(arr[i])
    }
}
console.log(newArr);
*/ 

function filterLogic(n) {
    if(n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ans = arr.filter(filterLogic);
console.log(ans);

function filterName(n) {
    if (n.startsWith("R")) {
        return true;
    } else {
        return false;
    }
}

names = ["Aryan", "Aadit", "Aarush", "Abhivanth", "Rakesh", "Roshan", "Rahul"]
const ans2 = names.filter(filterName);
console.log(ans2)

