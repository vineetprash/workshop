// types of variables in JS
// var: is scoped to the nearest function or globally if declared outside of any function.
// let: is scoped to the nearest enclosing block (like loops or conditionals), rather than the nearest function.
// const: is hoisted to the top of the block, but it cannot be accessed before its declaration (due to the "temporal dead zone").

//! var
var name = "Alice";
console.log(name);  // Outputs: Alice

var name = "Bob";   // Redeclaration is allowed
console.log(name);  // Outputs: Bob

//! let
let age = 30;
console.log(age);  // Outputs: 30

// let age = 35;   // Error: Cannot redeclare block-scoped variable 'age'

//! const
const pi = 3.14;
console.log(pi);  // Outputs: 3.14

pi = 3.14159;  // Error: Assignment to constant variable.

const person = { name: "John", age: 30 };
person.age = 31;  // Allowed: you can modify the properties of an object
console.log(person.age);  // Outputs: 31

//* summary
// Use var only if you're working with older code (legacy JavaScript).
// Use let when the variable's value might change.
// Use const when the variable's value should remain constant after assignment.

//! loops
//* 1. map() = array.map(callback(currentValue, index, array));
// map() is used to transform each element of an array and return a new array of the same length with the transformed values.
const array1 = [1, 2, 3, 4, 5];

const squaredNumbers = array1.map(num => num * num);

console.log(squaredNumbers);  // Outputs: [1, 4, 9, 16, 25].  map() takes each element in the numbers array and squares it. The result is a new array of squared numbers.

//*2. filter() = array.filter(callback(currentValue, index, array));
// filter() is used to filter out elements based on a condition and returns a new array with only the elements that satisfy the condition.
const array2 = [1, 2, 3, 4, 5, 6];

const evenNumbers = array2.filter(num => num % 2 === 0);

console.log(evenNumbers);  // Outputs: [2, 4, 6]

//*3. reduce() = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
// reduce() is used to accumulate or reduce an array to a single value based on a provided function. It's often used for summing values, concatenating strings, or even transforming an array into a different structure (e.g., an object).
const array3 = [1, 2, 3, 4, 5];

const sum = array3.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum);  // Outputs: 15

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit]++;
  } else {
    acc[fruit] = 1;
  }
  return acc;
}, {});

console.log(fruitCount);  // Outputs: { apple: 3, banana: 2, orange: 1 }