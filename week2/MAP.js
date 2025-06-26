// MAP | FILTER | ARROW FCTNS

// given an array give me back a new array where every value is multiplied by 2
// [1, 2, 3, 4, 5] => [2, 4, 6, 8, 10]

// map -> takes input (arr, transformation)

/* CUSTOM MAP FUNCTION
function mul(arr) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        arr2.push(arr[i] * 2);
    }
    return arr2;
}

function map(arr, fctn) {
    return fctn(arr);
}

arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

ans = map(arr1, mul)
console.log(ans)
*/

// JS INBUILT MAP FCTN
input = [1, 2, 3, 4, 5, 6]
function transform(i) {
    return i * 3
}
const ans = input.map(transform);
console.log(ans);