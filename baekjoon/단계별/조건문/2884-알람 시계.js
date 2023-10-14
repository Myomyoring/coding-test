const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const A = input[0];
const B = input[1];
let C = A;
let D = B - 45;

if (D < 0) {
  C = (A - 1 + 24) % 24;
  D = 60 + D;
}

console.log(`${C} ${D}`);
