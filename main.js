/* 
EXAMPLE 1: Callback functions illustrated with
.forEach()
*/

let avengers = [
  "Captain America",
  "Iron Man",
  "Black Widow",
  "Hulk",
  "Thor",
  "Hawkeye",
];

function announceHeroName(item, index) {
  console.log(`Item: ${item},
  Index: ${index}`);
}

// 1. element of the array passed to callback
// 2. index of the element

// avengers.forEach(announceHeroName);

// What is the difference between the two forEach examples?

// avengers.forEach((avenger) => console.log(`Greetings, ${avenger}!`));

// function shoutOut(avenger) {
//   console.log(`Greetings, ${avenger}!`);
// }
// avengers.forEach(shoutOut);

/*
EXAMPLE 2: Callback functions illustrated with
.addEventListener()
*/

const container = document.getElementsByTagName("main")[0];
const card = document.getElementsByTagName("section")[0];
const span = document.getElementsByTagName("span")[0];
const button = document.getElementsByTagName("button")[0];

// name
// const handleClick =

button.addEventListener("click", function (e) {
  span.innerText = e.clientX;
  return e.clientX;
});

function calculate(mathFunction, num1, num2) {
  return mathFunction(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

console.log(calculate(add, 3, 4));
