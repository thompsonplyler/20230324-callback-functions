console.log("I am connected!");

const container = document.getElementById("container");
const text = document.querySelector(".card-text");

const doAThing = function (event) {
  // definition of a function
  console.log(event);
  text.innerText = "something";
  console.log("Mountain is totally unironically delicious!");
  return "New Dew! (Limited Time Only)";
};

container.addEventListener("click", doAThing);

function myAddEventListener(string, callback, event) {
  if (event.type === string) {
    callback(event);
  }
}

// callback examples using arrays with forEach
/*


animals.forEach(shoutOut);
animals.forEach((animal) => console.log(animal));

multiple automatic arguments: 


function add(num1) {
  return num1;
}

function calculate(mathThing, num1, num2) {
    return mathThing(num1, num2);
}

const result = calculate(add, 2, 3);
console.log(result);
*/

const animals = ["dog", "cat", "bird", "fish", "snake", "lizard", "horse"];

function myForEach(array, myCallback) {
  for (let i = 0; i < array.length; i++) {
    myCallback(array[i], i, array);
  }
}

const shoutOut = function (animal) {
  console.log(`Animal: ${animal}.`);
};

myForEach(animals, shoutOut);
