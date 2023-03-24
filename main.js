console.log("I am connected!");

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

// What is the difference between the two forEach examples?

avengers.forEach((avenger) => console.log(`Greetings, ${avenger}!`));

function shoutOut(avenger) {
  console.log(`Greetings, ${avenger}!`);
}
avengers.forEach(shoutOut);

/*
EXAMPLE 2: Callback functions illustrated with
.addEventListener()
*/

const container = document.getElementsByTagName("main")[0];
const card = document.getElementsByTagName("section")[0];
const text = document.getElementsByTagName("p")[0];

const changeText = function (event) {
  /*
  This function will change the text 
  of the card
  */

  return "Some text";
};

container.addEventListener("click", function () {
  /* do the thing 
   in this anonymous function
   */
});
