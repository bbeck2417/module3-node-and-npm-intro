// const fs = require('fs');
// import * as fs from "fs";
import { say } from "cowsay";

console.log("Hi! My name is node.js!");

// const words = ["Sunny", "Cloudy", "Rainy", "Windy", "Foggy"];
// const output = words.join("\n");

// fs.writeFile("words.txt", output, fileWrite);

// function fileWrite() {
//   console.log("File written!");
// }

const output = say({
  text: "Hello world!",
  e: "xx", // eyes
  r: true, // random mode - use a random cow.
});

console.log(output);
