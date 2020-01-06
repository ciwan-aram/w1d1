// single line comment

/*
multi
line
comment

console.log("HELLOOOOOO") -> not executed
*/

const schoolName = "Ironhack";

/*
const age = Number(prompt("How old are you?"));

if (age >= 18) {
  alert("You can apply for a driving license in Germany");
} else if (age === 17) {
  alert("You can apply for accompanied driving");
} else {
  alert("You are too young to apply for a driving license");
}
*/

const language = prompt("What is your mother tongue?");

switch (language) {
  case "french":
    console.log("Bonjour!");
    break;
  case "english":
    console.log("Hello!");
    break;
  case "spanish":
    console.log("Hola!");
    break;
  case "italian":
    console.log("Ciao!");
    break;
  default:
    console.log("Non recognized language");
}
