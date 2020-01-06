console.log("Hello world!");

// variable declaration
let age;
var city;

// variable assignment
age = 29;
city = "Berlin";

// variable initialization
const firstName = "Montasar";

// `let` lets us reassign (or change) a variable
age = 28;

// `const` creates a constant variable that cannot be reassigned
// firstName = "Johnny"; ❌

// const lastName; ❌

// A variable declared with `let` or `const` cannot be re-declared
// let age = 30; ❌

// Variable names should be lowercase, or camelCase if the name is composed of more than one word
// Variable names should be descriptive
const a = "Ozhan"; // ❌
const value = "Turkey"; // ❌
const something = 15; // ❌

// Variable names should be concise
const telephoneNumber = "+33123456789"; // ❌ -> phoneNumber
const ageValue = 34; // ❌ -> age

// We will use uppercase naming for certain variables that need to stand out

// Numbers can represent numeric value
const mileage = 100000; // integers
const price = 15.99; // float

// Math operators
const sum = 1 + 1; // addition
1 - 0; // subtraction
6 * 7; // multiplication
4 / 2; // division

4 % 2; // modulo (remainder)
3 ** 3; // exponentiation

// Expression is the combination of any values and operator that results in another value
2 + 4 * 3;

// Assignment operators
let x = 0;

// add 1
x += 1; // x = x + 1;

// subtract 2
x -= 2; //x = x - 2;

// multiply by 3
x *= 3; // x = x * 3;

// divide by 4
x /= 4; // x = x /4;

// modulo 5
x %= 5; // x = x % 5

// to the power of 6
x **= 6; // x = x ** 6
