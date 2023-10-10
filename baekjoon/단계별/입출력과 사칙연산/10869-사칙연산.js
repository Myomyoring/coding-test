const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(
  a +
    b +
    "\n" +
    (a - b) +
    "\n" +
    a * b +
    "\n" +
    Math.floor(a / b) +
    "\n" +
    (a % b)
);
