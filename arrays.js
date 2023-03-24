let avengers = [
  "Captain America",
  "Iron Man",
  "Black Widow",
  "Hulk",
  "Thor",
  "Hawkeye",
];

// .shift() removes the first element of an array and returns it
let shiftResult = avengers.shift();
console.log(shiftResult);

// .unshift() adds an element to the beginning of an array and returns the new length
let unshiftResult = avengers.unshift("Falcon");
console.log(unshiftResult);

// .pop() removes the last element of an array and returns it
const popResult = avengers.pop();
console.log(avengers);
console.log(popResult);

// .split() splits a string into an array of substrings
const sentence = "987563";
let splitResult = sentence.split("");
console.log(sentence);
console.log(splitResult);

// .join() joins all elements of an array into a string
let joinResult = splitResult.join("");
console.log(joinResult);
