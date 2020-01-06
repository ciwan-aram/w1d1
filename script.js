console.log("Hello world!");

// variable declaration
let age;
var city;

// variable assignment
age = 29;
city = "Berlin";

// variable initialization
const firstName = "Montasar";
const lastName = "J";

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

const greeting = "Hello";
// prettier-ignore
let name = 'Jane Doe';
const country = `USA`;

// const example = "John's";
// const example = 'He said "bla bla".';

let customGreeting = greeting + " " + name + " from " + country;
// const customGreeting = `${greeting} ${name} from ${country}`;

// customGreeting = customGreeting + "!!!";
customGreeting += "!!!";

const initials = firstName[0] + lastName[0];

// Using the square bracket notation, target the last character in `customGreeting`

const lastChar = customGreeting[customGreeting.length - 1];

// .length is a property that comes with values of type string

// indexOf
// target.indexOf(substring) -> return the position of the first occurence of the substring in the target string, or -1

greeting.indexOf("H"); // 0
greeting.indexOf("h"); // -1
greeting.indexOf("lo"); // 3
greeting.indexOf("l"); // 2

// lastIndexOf works as indexOf but from the end of the string
greeting.lastIndexOf("l"); // 3

// slice returns a substring from a string with a given range specified as parameters
name.slice(0, 4); // "Jane"
name.slice(5); // "Doe"
name.slice(); // "Jane Doe"

const idx = name.indexOf(" ");
name = name.slice(0, idx) + name.slice(idx).toUpperCase();
// "Jane DOE"

name[0] = "j";
// "Jane DOE"

// Strings, like numbers and all the other primitives are immutable -> meaning they can't be altered

// Boolean expressions
5 > 3; // true
0 <= -1; // false

firstName === "Montasar"; // true
firstName === "qwerty"; // false

// logical operators
// OR ||
// the || operator will evaluate to the first truthy expression it encounters, or to the last falsy expression
5 > 3 || 10 || "abc"; // true
false || 0 || 42 || "def"; // 42
4 < 3 || "" || 0 || NaN; // NaN

// AND &&
// the && operator will evaluate to the first falsy expression it encounters or to the last truthy expression
true && 1; // 1
42 && null && undefined && "xyz"; // null
-1 && "2" && -3; // -3

// NOT !
// the ! operator will return a boolean that is the negated value of the expression
!false; // true
!42; // false
!(4 > 2); // false

let foo;
console.log(foo); // undefined
// undefined represents the unintentional absence of value
(10).length; // undefined

// null represents the intentional absence of value
