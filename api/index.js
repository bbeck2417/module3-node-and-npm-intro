// const fs = require('fs');
// import * as fs from "fs";
import { parse } from "url";
import { say } from "cowsay";

export default function handler(req, res) {
  const parsedUrl = parse(req.url, true);

  // Get text from query string
  const textInput = parsedUrl.query.text;

  if (!textInput) {
    res.setHeader("Content-Type", "text/html");

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Cowsay Web</title>
        </head>
        <body>
          <h1>Cowsay Generator</h1>
          <form action="/" method="GET">
            <input type="text" name="text" placeholder="What should the cow say?" required />
            <button type="submit">Say it!</button>
          </form>
        </body>
      </html>
    `;

    res.end(html);
    return;
  }

  // List of valid cows
  const cows = ["stegosaurus", "tux", "meow", "daemon", "kitty"];

  // Randomly select a cow
  const randomCow = cows[Math.floor(Math.random() * cows.length)];

  let cowOutput = say({ text: textInput, f: randomCow });

  res.setHeader("Content-Type", "text/html");

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Cowsay Web</title>
      </head>
      <body>
        <h1>Cowsay Generator</h1>
        <form action="/" method="GET">
          <input type="text" name="text" placeholder="What should the cow say?" required />
          <button type="submit">Say it!</button>
        </form>
        <br>
        <pre>${cowOutput}</pre> 
      </body>
    </html>
  `;

  res.end(html);
}
// console.log("Hi! My name is node.js!");

// const words = ["Sunny", "Cloudy", "Rainy", "Windy", "Foggy"];
// const output = words.join("\n");

// fs.writeFile("words.txt", output, fileWrite);

// function fileWrite() {
//   console.log("File written!");
// }

// const output = say({
//   text: "Hello world!",
//   e: "xx", // eyes
//   r: true, // random mode - use a random cow.
// });

// console.log(output);
