/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

// ONE HELL GOOD OF AN ASSIGNMENT

class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  add(n) {
    this.result += n;
    return this.result;
  }

  subtract(n) {
    this.result -= n;
    return this.result;
  }

  multiply(n) {
    this.result *= n;
    return this.result;
  }

  divide(n) {
    if(n === 0) {
      throw new Error("Sorry this cannot be done");
    }
    this.result /= n;
    return this.result;
  }

  clear(n) {
    this.result = 0;
    return this.result;
  }

  getResult() {
    return this.result;
  }

  
  calculate(exp) {
    // remove all spaces
    const cleaned = exp.replace(/\s+/g, '');

    // check for invalid characters
    if(/[^0-9+\-*/().]/.test(cleaned)) {
      throw new Error("Invalid characcters in expression");
    }

    // making divisibility a check
    const divZeroPattern = /\/\s*(0+(?![\d]))/;
    if (divZeroPattern.test(cleaned)) {
      throw new Error("Division by zero is not allowed");
    }

    // evlauate i hope to god this works
    this.result = eval(cleaned); // using eval() -> have to cheat a lil, imma head out :)
    return this.result;

  }
  

  static typeofClass(Calculator) {
    const a = "This is a calculator";
    return a;
  }
}

// console.log(Calculator.typeofClass());
// let calc = new Calculator(1);

// addition = calc.add(10);
// subtraction = calc.subtract(10);
// multiplication = calc.multiply(100);
// dividaton = calc.divide(10);

// console.log("Getting the value of n: " + calc.getResult());
// const ans = calc.calculate("5 + 7");
// console.log("Using the string method conversion: " + ans);
// console.log("Addition: " + addition);
// console.log("Subtraction: " + subtraction);
// console.log("Multiplication: " + multiplication);
// console.log("Division: " + dividaton);

module.exports = Calculator;
