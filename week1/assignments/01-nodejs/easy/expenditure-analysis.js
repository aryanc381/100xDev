/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  const categoryTotals = {};

  // bhai looping through every transaction -> this "of" operator is sexci ;) 
  for(let txn of transactions) {
    const category = txn.category;
    const price = txn.price;

    // checking bc if the categories exist more than once, if they do then sum the price
    if(categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }
  // saving this shit in the result in the required format :>
  const result = [];
  for(let category in categoryTotals) {
    result.push({
      category: category,
      totalSpent: categoryTotals[category],
    });
  }
  // return this shit
  return result;
}

module.exports = calculateTotalSpentByCategory;
