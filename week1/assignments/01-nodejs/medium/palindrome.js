/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let str2 = ""

  for(let i = str1.length - 1; i >= 0; i--) {
    str2 += str1.charAt(i);
  }

  if(str1 !== str2) {
    return false;
  }


  // i have to return either true or false
  return true;
}

module.exports = isPalindrome;
